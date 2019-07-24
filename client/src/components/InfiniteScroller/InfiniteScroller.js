import React, {Component, Fragment} from "react";
import {render} from "react-dom";
import request from "superagent";
import debounce from "lodash.debounce";

class InfiniteUsers extends Component {
    constructor(props) {
        super(props);
        
        // Setting initial state
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            users: [],
        };

        window.onscroll = debounce(() => {
            const {
                loadUsers,
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
                loadUsers();
            }
        }, 100);
    }

    componentWillMount() {
        // Loads some "users" (articles, posts, etc...) on initial load
        this.loadUsers();
    }

    loadUsers = () => {
        this.setState({ isLoading: true }, () => {
            request
                .get("/api/")
        })
    }
}