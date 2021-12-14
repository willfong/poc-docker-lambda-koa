# Lambda / Docker / Koa

## Build The Image

```
docker build -t poc-docker-lambda-koa .
```

## Start Container

```
docker run -p 8080:8080 poc-docker-lambda-koa
```

## Test Endpoint

```
curl -XPOST "http://localhost:8080/2015-03-31/functions/function/invocations" -d '{}'
```

## Client Return Example

```
{
  "statusCode": 200,
  "headers": {
    "content-type": "text/plain; charset=utf-8",
    "content-length": "11"
  },
  "isBase64Encoded": false,
  "body": "Hello World"
}
```

## Server Return Example

```
START RequestId: 297820c7-76ce-4def-89d9-423e046e9406 Version: $LATEST
{"level":30,"time":1639481359143,"pid":14,"hostname":"12f912fe4592","req":{"id":3,"method":"GET","url":"/","headers":{"content-length":0}},"res":{"statusCode":200,"headers":{"content-type":"text/plain; charset=utf-8","content-length":"11"}},"responseTime":1,"msg":"request completed"}
END RequestId: 297820c7-76ce-4def-89d9-423e046e9406
REPORT RequestId: 297820c7-76ce-4def-89d9-423e046e9406	Duration: 9.61 ms	Billed Duration: 10 ms	Memory Size: 3008 MB	Max Memory Used: 3008 MB
```
