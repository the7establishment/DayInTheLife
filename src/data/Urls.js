const protocol = process.env.REACT_APP_PROTOCOL || "http";
const hostname = process.env.REACT_APP_HOSTNAME || "localhost";
const port = process.env.PORT || "3500";

export const RestUrls = {
    user: `${protocol}://${hostname}:${port}/user`,
    users: `${protocol}://${hostname}:${port}/users`,
    days: `${protocol}://${hostname}:${port}/days`,
    products: `${protocol}://${hostname}:${port}/products`,
}