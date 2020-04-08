import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '', title: 'Home', icon: 'home', class: '' },
    // { path: 'search-film', title: 'Search Film',  icon: 'search', class: '' },
    { path: 'popular-films', title: 'Popular Films', icon: 'video_library', class: '' },
    { path: 'now-playing-films', title: 'Now Playing Films', icon: 'play_circle_filled', class: '' },
    { path: 'top-rated-films', title: 'Top Rated Films', icon: 'star', class: '' },
    { path: 'upcoming-films', title: 'Upcoming Films', icon: 'visibility_off', class: '' },
    // { path: 'user/login', title: 'Sing In', icon: 'sing_in', class: '' }
];
export const ROUTESSEARCH: {} = { path: 'search-film', title: 'Search Film', icon: 'search', class: '' }