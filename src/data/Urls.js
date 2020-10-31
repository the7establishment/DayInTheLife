const protocol = process.env.REACT_APP_PROTOCOL || "http";
const hostname = process.env.REACT_APP_HOSTNAME || "localhost" + ":3500";
export const Urls = {
    user: `${protocol}://${hostname}/user`,
    day: `${protocol}://${hostname}/day`,
    product: `${protocol}://${hostname}/product`,
}