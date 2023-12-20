// MDN npm package client side publishing tools

// Let's say we want to show human-readable relative dates, such as "2 hours ago", "4 days ago" and so on. 
// The date-fns package's formatDistanceToNow() method is useful for this


import { formatDistanceToNow } from "date-fns";

const date = "1996-09-13 10:00:00";
document.body.textContent = `${formatDistanceToNow(new Date(date))} ago`;
