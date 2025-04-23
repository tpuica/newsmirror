FROM eclipse-temurin:21
MAINTAINER tp
RUN mkdir /opt/app
COPY build/libs/core-0.0.1-SNAPSHOT.jar /opt/app/core.jar
ENTRYPOINT ["java","-jar","/opt/app/core.jar"]