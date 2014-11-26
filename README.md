Boundary Asterisk Plugin
==================

Plugin for monitoring Asterisk with Boundary.

Metrics include:
* Number of Channels inuse
* Number of Bridges inuse 
* Number of SIP endpoints connected

Prerequisites
-------------

### Required to Install
1. ari-client 0.1.4

### Required at Runtime
1. Asterisk 12 or later with ARI support
2. Plugin will need read-only access to Asterisk via ARI, so some configuration will be necessary.
