import React, { Component, Fragment } from "react";
import request from "superagent";
import debounce from "lodash.debounce";
import ArticleCard from "../ArticleCard/ArticleCard";

class InfiniteScroller extends Component {
    constructor(props) {
        super(props);

        // Setting initial state
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            cards: [],
        };

        window.onscroll = debounce(() => {
            const {
                loadCards,
                state: {
                    error,
                    isLoading,
                    hasMore,
                },
            } = this;

            // Errors early if:
            // there's and error
            // it's already loading
            // or if there is nothing left to load
            if (error || isLoading || !hasMore) return;

            // This will check if the user has scrolled to the bottom of the page
            if (window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) {
                loadCards();
            }
        }, 100);
    }

    componentWillMount() {
        // Loads some cards (articles, posts, etc...) on initial load
        this.loadCards();
    }

    loadCards = () => {
        this.setState({ isLoading: true }, () => {
            request
                .get("/api/articles/" + this.props.link)
                .then(results => {
                    const nextArticles = results.body.map(cards => ({
                        id: cards._id,
                        image: cards.img,
                        title: cards.title,
                        link: cards.link,
                        author: cards.author,
                        teaser: cards.teaser,
                        topic: cards.category,
                    }));

                    this.setState({
                        hasMore: (this.state.cards.length < 100),
                        isLoading: false,
                        cards: [
                            ...this.state.cards,
                            ...nextArticles,
                        ],
                    });
                })
                .catch(err => {
                    this.setState({
                        error: err.message,
                        isLoading: false,
                    });
                })
        });
    }

    render() {
        const {
            error,
            hasMore,
            isLoading,
            cards,
        } = this.state;

        return (
            <div>
                {cards.map(card =>
                    <Fragment key={card.id}>
                        <ArticleCard image={card.image} title={card.title} teaser={card.teaser} link={card.link} />
                    </Fragment>
                )}
                {error &&
                    <div style={{ color: "#900" }}>
                        {error}
                    </div>
                }
                {isLoading &&
                    <div>Loading...</div>
                }
                {!hasMore &&
                    <div>No more results</div>
                }
            </div>
        );
    }
}

export default InfiniteScroller;