FROM eclipse-temurin:17-jdk-alpine
VOLUME /tmp
COPY out/artifacts/Agent_Guesser_jar/*.jar app.jar
COPY out/artifacts/Agent_Guesser_jar/*.pmml model.pmml
ENTRYPOINT ["java","-jar","/app.jar"]