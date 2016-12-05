FROM java:8

RUN useradd -ms /bin/bash appuser

EXPOSE 9000
WORKDIR /app

ADD dockerdemoapp.war .
RUN chown -R appuser /app

USER appuser

ENTRYPOINT java -jar dockerdemoapp.war
