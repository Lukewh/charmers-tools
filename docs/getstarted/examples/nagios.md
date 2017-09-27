# Nagios

Nagios provides basic monitoring for hosts, services, and networks. It checks for working ping and SSH. {details_link}

**Requires**: {requires_cli_link}

## Get started

1. Relate the nagios charm to any other charm, to monitor it. 
2. Select the Nagios application, click “Expose”, and toggle “Yes”
3. Browse to the IP: http://x.x.x.x/nagios3 to get to the web UI
4. Login as “nagiosadmin”
5. Fetch the Nagios Administrative password. Retrieve it from the nagios host, as it is generated during installation: 
 `juju ssh central-monitor/0 sudo cat /var/lib/juju/nagios.passwd`

## Further reading

- [Documentation](http://www.nagios.org/documentation)
- [Support](https://www.nagios.org/support/)
- [Project homepage](https://launchpad.net/nagios-charm)