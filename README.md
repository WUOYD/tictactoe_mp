  

# README TicTacToe MP

TicTacToe Multiplayer was developed for studio_UxWebmobile2_2023 at Digital Ideation HSLU. The project is using node.js, express, socket.io, and javascript.

  

## How to play?

Requirements: Node.js

  

1. Download repo

2. Start server in console: "node server.js"

3. Open http://localhost:3000/

4. Play!

  

## Architecture diagram

```mermaid

graph TD

node.js --> Server;

express.js --> Server;

socket.io --> Servers;

Server -->Client1;

Server -->Client2;
```
  

## Sequence diagram

```mermaid

sequenceDiagram

participant Client 1

participant Server

participant Client 2

Client 1->>Server: initialize connection

Server->> Client 1: waiting queue

Server->> Client 1: turn -> true

Client 2->>Server: initialize connection

Server->> Client 2: waiting queue

Server->> Client 1: start game

Server->> Client 2: start game

Client 1->>Server: send clicked tile

Server->> Client 2: send clicked tile

Server->> Client 2: turn -> true

Client 2->>Server : send clicked tile

Server->> Client 2: turn -> false

Client 2-->>Server : check if player won: false

Server->>Client 1: send clicked tile

Server->>Client 1: turn -> true

Client 1->>Server: send clicked tile

Server->> Client 1: turn -> false

Client 1->>Server : check if player won: true

Server->> Client 2: player has won

Server->> Client 1: player has won

Server->> Client 2: waiting queue

Server->> Client 1: waiting queue

Client 2->>Server: restart

Client 1->>Server: restart

Server->> Client 1: start game

Server->> Client 2: start game
```