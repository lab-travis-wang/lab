# syntax=docker/dockerfile:1

ARG PB_VERSION=0.35.0

FROM alpine:3.20 AS downloader
ARG PB_VERSION
ARG TARGETARCH

RUN apk add --no-cache ca-certificates curl unzip

# Map Docker's TARGETARCH to PocketBase release naming
RUN set -eux; \
  case "${TARGETARCH}" in \
    amd64) PB_ARCH="amd64" ;; \
    arm64) PB_ARCH="arm64" ;; \
    *) echo "Unsupported TARGETARCH: ${TARGETARCH}"; exit 1 ;; \
  esac; \
  url="https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_${PB_ARCH}.zip"; \
  echo "Downloading ${url}"; \
  curl -fsSL "${url}" -o /tmp/pocketbase.zip; \
  unzip /tmp/pocketbase.zip -d /out; \
  chmod +x /out/pocketbase

FROM alpine:3.20

RUN apk add --no-cache ca-certificates

WORKDIR /pb
COPY --from=downloader /out/pocketbase /usr/local/bin/pocketbase
EXPOSE 8090

CMD ["pocketbase", "serve", "--http=0.0.0.0:8090"]
