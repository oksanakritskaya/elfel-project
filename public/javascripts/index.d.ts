interface SmsResponse {
    message: string;
}
declare enum Method {
    GET = "GET",
    POST = "POST"
}
declare function api<T>(url: string, method: Method, body?: any): Promise<T>;
