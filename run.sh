#!/bin/bash
if [[ "$#" -ne 2 ]]; then
    echo "Usage: $0 {run|restart|stop} {prod|dev}"
    exit 1
fi

ACTION="$1"
ENV="$2"

STACK_DIR="deployment/$ENV"
COMPOSE_FILE="$STACK_DIR/docker-compose.$ENV.yml"

function run_stack() {
    docker-compose -f "$COMPOSE_FILE" up -d
}

function restart_stack() {
    docker-compose -f "$COMPOSE_FILE" restart
}

function stop_stack() {
    docker-compose -f "$COMPOSE_FILE" down
}

case "$1" in
    run)
        run_stack
        ;;
    restart)
        restart_stack
        ;;
    stop)
        stop_stack
        ;;
    *)
        echo "Usage: $0 {run|restart|stop}"
        exit 1
        ;;
esac