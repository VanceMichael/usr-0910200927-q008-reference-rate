# 基准汇率公告校验器

项目对基准汇率公告中的标价方向、精度和派生值进行确定性校验。支持的货币对与舍入口径在 `contracts/rate_rules.json` 中定义，不依赖数据库或外部行情。

```bash
docker build -t reference-rate-validator .
docker run --rm -p 8080:8080 reference-rate-validator
curl http://localhost:8080/health
```

金额计算应统一使用 Decimal，接口 JSON 的字段顺序由响应装配层固定。
