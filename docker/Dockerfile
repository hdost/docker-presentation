FROM java:8

RUN useradd -ms /bin/bash appuser

EXPOSE 9000
WORKDIR /app
USER appuser
ADD dockerdemoapp.war .

ENTRYPOINT java -jar /app/dockerdemoapp.war
