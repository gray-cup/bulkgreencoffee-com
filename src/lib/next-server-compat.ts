export class NextRequest extends Request {
  constructor(input: RequestInfo | URL, init?: RequestInit) {
    super(input, init);
  }

  get nextUrl() {
    return new URL(this.url);
  }

  async json(): Promise<any> {
    return super.json();
  }
}

export class NextResponse extends Response {
  static json(body: any, init?: ResponseInit) {
    const headers = new Headers(init?.headers);
    if (!headers.has("content-type")) {
      headers.set("content-type", "application/json");
    }
    return new Response(JSON.stringify(body), {
      ...init,
      headers,
    });
  }

  static redirect(url: string | URL, status: number = 307) {
    return new Response(null, {
      status,
      headers: { Location: typeof url === "string" ? url : url.toString() },
    });
  }

  static rewrite(url: string | URL) {
    return new Response(null, {
      status: 200,
      headers: { "x-middleware-rewrite": typeof url === "string" ? url : url.toString() },
    });
  }

  static next() {
    return new Response(null, { status: 200 });
  }
}
