# Default Linux Universal Image
FROM mcr.microsoft.com/devcontainers/universal:2-linux


# Install Python 3 and Flask
RUN apt-get update && \
    apt-get install -y python3 python3-pip && \
    pip3 install flask

# Install Node.js and Vue CLI
RUN curl -fsSL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g @vue/cli