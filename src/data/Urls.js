const protocol = process.env.REACT_APP_PROTOCOL || "http";
const hostname = process.env.REACT_APP_HOSTNAME || "localhost" + ":3500";

export const RestUrls = {
    user: `${protocol}://${hostname}/user`,
    users: `${protocol}://${hostname}/users`,
    day: `${protocol}://${hostname}/day`,
    product: `${protocol}://${hostname}/product`,
}