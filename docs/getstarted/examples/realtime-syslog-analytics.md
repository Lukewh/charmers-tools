# Realtime Syslog Analytics

A six-unit big data cluster that includes Hadoop 2.7.3. It provides an environment for analysing syslog events in Apache Zeppelin web notebooks. {details_link}

**Requires**: {requires_cli_link}

## Get started

1. **Smoketests**:
 `juju run-action namenode/0 smoke-test`

 Similar test exist for the other units `resourcemanager/0`, `zeppelin/0` and `slave/0` ( 30 min.)

2. Web-consoles can be exposed for namenode, resourcemanager and zeppelin:

 First select the application, click “expose”, then toggle “yes”
 Browse to revealed public IPs:

 http://NAMENODE_PUBLIC_IP:50070
 http://RESOURCEMANAGER_PUBLIC_IP:8088
 http://RESOURCEMANAGER_PUBLIC_IP:19888
 http://ZEPPELIN_PUBLIC_IP:9080

## Further reading
- (Bigdata mailing list)[mailto:bigdata@lists.ubuntu.com]
- (File an issue)[https://github.com/juju-solutions/bundle-realtime-syslog-analytics/issues]