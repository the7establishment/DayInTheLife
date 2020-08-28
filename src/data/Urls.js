const protocol = "http";
const hostname = "localhost";
const port = "3500";

export const RestUrls = {
    user: `${protocol}://${hostname}:${port}/api/user`,
    users: `${protocol}://${hostname}:${port}/api/users`,
    days: `${protocol}://${hostname}:${port}/api/days`,
    products: `${protocol}://${hostname}:${port}/api/products`,
}