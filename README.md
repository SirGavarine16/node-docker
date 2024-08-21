# Node Dock - a Docker network base

Simple Node.js + Express project using TypeScript along with a Mongo database to test container communication through a network when using Docker Compose.

## Notes

- When building the environment variables, the host path of the Mongo URL should be the name of the container (in this example, it's dock-database) which is set on the Docker Compose file.
- Additional configurations were made to work with TypeScript.