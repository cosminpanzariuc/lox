<template>
    <div id="movie-list">
        <div v-if="filteredMovies.length">
            <div style="text-align:center;padding-bottom:50px">
                <strong>Number of movies: {{filteredMovies.length}}</strong>
            </div>

            <movie-item v-for="movie in filteredMovies" :movie="movie.movie">
                <div class="movie-sessions">
                    <div v-for="session in filteredSessions(movie.sessions)"
                         v-tooltip="{seats: session.seats}"
                         class="session-time-wrapper tooltip-wrapper">
                            <div class="session-time">{{formatSessionTime(session.time)}}</div>
                    </div>
                </div>
            </movie-item>
        </div>
        <div v-else-if="movies.length" class="no-results">
            {{noResults}}
        </div>
        <div v-else class="no-results">
            Loading...
        </div>
    </div>
</template>

<script type="text/babel">
    import MovieItem from './MovieItem.vue';
    import times from '../util/times';

    export default{
        props: ['genre', 'time', 'movies', 'day'],
        methods: {
            formatSessionTime(raw){
                return this.$moment(raw).format('h:mm A');
            },
            filteredSessions(sessions){
                return sessions.filter((session) => this.sessionPassesTimeFilter(session));
            },
            moviePassesGenreFilter(movie){
                if (!this.genre.length) {
                    return true;
                } else {
                    let movieGenres = movie.movie.Genre.split(', ');
                    let matched = true;
                    this.genre.forEach(genre => {
                        if (movieGenres.indexOf(genre) === -1) {
                            matched = false;
                        }
                    });
                    return matched;
                }
            },
            sessionPassesTimeFilter(session){
                if (!this.day.isSame(this.$moment(session.time), 'day')) {
                    return false;
                } else if (this.time.length === 0 || this.time.length === 2) {
                    return true;
                } else if (this.time[0] === times.AFTER_6PM) {
                    return this.$moment(session.time).hour() >= 18;
                } else {
                    return this.$moment(session.time).hour() < 18;
                }
            }
        },
        computed: {
            filteredMovies(){
                return this.movies
                        .filter(this.moviePassesGenreFilter)
                        .filter(movie => movie.sessions.find(this.sessionPassesTimeFilter));
            },
            noResults(){
                return `No results for: ${[...this.time, ...this.genre].join(', ')}.`
            }
        },
        components: {
            MovieItem
        }
    }
</script>