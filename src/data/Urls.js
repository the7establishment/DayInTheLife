const protocol = process.env.REACT_APP_PROTOCOL || "http";
const hostname = process.env.REACT_APP_HOSTNAME || "localhost:4201";

export const Urls = {
    user: `${protocol}://${hostname}`,
    day: `${protocol}://${hostname}/day`,
    product: `${protocol}://${hostname}/product`,
    job: `${protocol}://${hostname}`,
    jobDescription: `${protocol}://${hostname}/job`,
    jobSalary: `${protocol}://${hostname}/job`,
    signup: `${protocol}://${hostname}/auth/signup`,
    login: `${protocol}://${hostname}/auth/login`
}