#!/usr/bin/env bash

#set -e

# CONFIG

VERSION="6.2.0"
DOC_URL="http://xp.readthedocs.org/en/latest/"
REPO="http://repo.enonic.com/public"
REPO_PATH="com/enonic/xp/distro"
DISTRO_NAME="distro-$VERSION.zip"
DOWNLOAD_URL="${REPO}/${REPO_PATH}/${VERSION}/${DISTRO_NAME}"
XP_DISTRO="enonic-xp-${VERSION}"
XP_OPT="ui"
XP_HOME="$XP_DISTRO/home"
XP_DEPLOY="$XP_HOME/deploy"

# APPS
XP_APP_PATH="com/enonic/theme"
XP_APP_BASE_URL="${REPO}/${XP_APP_PATH}"

# SUPERHERO
SUPERHERO_VERSION="1.2.0-SNAPSHOT"
SUPERHERO_NAME="superhero"
SUPERHERO_ARTIFACT="$SUPERHERO_NAME-$SUPERHERO_VERSION.jar"
SUPERHERO_REPO_URL="${XP_APP_BASE_URL}/${SUPERHERO_NAME}/${SUPERHERO_VERSION}/${SUPERHERO_ARTIFACT}"

################
# HELPERS
################

# Config

CYAN="\033[36m"
BLUE="\033[34m"
GRAY="\033[33m"
RED="\033[31m"
END="\033[0m\033[27m"
INVERSE="\033[7m"

# Functions

function br() {
    printf "\n"
}

function message() {
    printf "$INVERSE$BLUE$1$END\n"
}


function info() {
    printf "* $BLUE$1$END\n"
}

function ok() {
    printf " - $GRAY$1$END\n"
}

function error() {
    printf "$RED$1$END\n"
}

function die() {
    error "$1"
    exit 1
}

function check_verify() {

    STATUS=$?

    if ((${STATUS} > 0)); then
        die "$1 : status = $STATUS"
    fi
}

################
# FUNCTIONS
################

function check_java() {

    info "Verify java environment"

    if [ -n "$JAVA_HOME" ] ; then
        if [ -x "$JAVA_HOME/jre/sh/java" ] ; then
            JAVACMD="$JAVA_HOME/jre/sh/java"
        else
            JAVACMD="$JAVA_HOME/bin/java"
        fi
        if [ ! -x "$JAVACMD" ] ; then
            die "ERROR: JAVA_HOME is set to an invalid directory: $JAVA_HOME."
        fi
    else
        JAVACMD="java"
        which java >/dev/null 2>&1 || die "ERROR: JAVA_HOME is not set and no 'java' command could be found in your PATH."
    fi

      if [[ "$JAVACMD" ]]; then
        version=$(${JAVACMD} -version 2>&1 | awk -F '"' '/version/ {print $2}')
        ok "Found Java JDK version: $version"
        if [[ "$version" < "1.8" ]]; then
            echo "Needs Java JDK 1.8+ to run"
            exit 1
        fi
    fi

}

function welcome() {
    message " Hi! Welcome, and thanks for trying out Enonic XP version ${VERSION} "
    br
    message " Your ready-to-code web-OS will be up and running shortly "
    message " For more information, documentation and help; please visit the documentation at ${DOC_URL} "
    br
}

function install() {
    info "Installing Enonic XP version $VERSION"
    verify
    download ${DISTRO_NAME} ${DOWNLOAD_URL}
    unwrap
}

function verify() {
    check_java
}

# $1 = target, $2 = url
function download() {

    TARGET=$1
    URL=$2

    info "Locating $DISTRO_NAME"

    if [ ! -f ./${TARGET} ]; then
        info "Downloading distribution: $URL"
        curl --fail -o ${TARGET} ${URL}
        check_verify "Failed to download distribution"
    else
        ok "Distro '${TARGET}' found locally"
    fi
}

function unwrap() {
    info "Unzip distro $DISTRO_NAME"
    unzip -qq -u ${DISTRO_NAME}
    check_verify "Cannot unzip ${DISTRO_NAME} "
}


function install_apps() {
    install_superhero
}

function install_superhero() {
    info "Installing application ${SUPERHERO_ARTIFACT}"
    download "${XP_DEPLOY}/${SUPERHERO_ARTIFACT}" "${SUPERHERO_REPO_URL}"
}

function start() {
   message "Installation successfull, starting Enonic XP version $VERSION"
   ${XP_DISTRO}/bin/server.sh ${XP_OPT}
}

################
# MAIN
################

function main() {
    welcome
    install
    install_apps
    start
}

main
