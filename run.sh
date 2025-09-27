#!/bin/bash
if [[ "$#" -ne 2 ]]; then
    echo "Usage: $0 {start|restart|stop} {prod|dev}"
    exit 1
fi

ACTION="$1"
ENV="$2"

STACK_DIR="deployment/$ENV"
COMPOSE_FILE="$STACK_DIR/docker-compose.$ENV.yml"

function start_stack() {
    if [ "$ENV" == "prod" ]; then
        echo "Starting the production stack..."
    else
        echo "Starting the development stack..."
    fi
    docker-compose -f "$COMPOSE_FILE" build --no-cache
    docker-compose -f "$COMPOSE_FILE" up -d
}

function restart_stack() {
    docker-compose -f "$COMPOSE_FILE" restart
}

function stop_stack() {
    if [ "$ENV" == "prod" ]; then
        echo "Stopping the production stack..."
        docker-compose -f "$COMPOSE_FILE" down -v
    else
        echo "Stopping the development stack..."
    fi
    docker-compose -f "$COMPOSE_FILE" down
}

case "$1" in
    start)
        start_stack
        ;;
    restart)
        restart_stack
        ;;
    stop)
        stop_stack
        ;;
    *)
        echo "Usage: $0 {start|restart|stop}"
    exit 1
    ;;
esac

# Keep terminal open until user presses enter
read -p "Press enter to exit..."