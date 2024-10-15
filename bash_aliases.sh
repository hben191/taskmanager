# Run the taskmanager container
alias drun='docker compose up --build -d'

# Stop the taskmanager container
alias ddown='docker compose down --volumes'

# Execute a shell inside the taskmanager container
alias dexec='docker exec -it taskmanager-app-1 /bin/bash'