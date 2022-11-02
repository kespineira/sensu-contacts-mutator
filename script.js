var event = {
  "check": {
    "command": "check-memory-usage --critical {{ index .labels \"check_memory.critical\" | default 90 }} --warning {{ index .labels \"check_memory.warning\" | default 80 }}",
    "handlers": [
      "prometheus-pushgateway-handler"
    ],
    "high_flap_threshold": 0,
    "interval": 60,
    "low_flap_threshold": 0,
    "publish": true,
    "runtime_assets": [
      "sensu/check-memory-usage"
    ],
    "subscriptions": [
      "system",
      "basic-linux"
    ],
    "proxy_entity_name": "",
    "check_hooks": null,
    "stdin": false,
    "subdue": null,
    "ttl": 0,
    "timeout": 0,
    "round_robin": false,
    "duration": 0.006748894,
    "executed": 1666961767,
    "history": [
      {
        "status": 0,
        "executed": 1666960567
      },
      {
        "status": 0,
        "executed": 1666960627
      },
      {
        "status": 0,
        "executed": 1666960687
      },
      {
        "status": 0,
        "executed": 1666960747
      },
      {
        "status": 0,
        "executed": 1666960807
      },
      {
        "status": 0,
        "executed": 1666960867
      },
      {
        "status": 0,
        "executed": 1666960927
      },
      {
        "status": 0,
        "executed": 1666960987
      },
      {
        "status": 0,
        "executed": 1666961047
      },
      {
        "status": 0,
        "executed": 1666961107
      },
      {
        "status": 0,
        "executed": 1666961167
      },
      {
        "status": 0,
        "executed": 1666961227
      },
      {
        "status": 0,
        "executed": 1666961287
      },
      {
        "status": 0,
        "executed": 1666961347
      },
      {
        "status": 0,
        "executed": 1666961407
      },
      {
        "status": 0,
        "executed": 1666961467
      },
      {
        "status": 0,
        "executed": 1666961527
      },
      {
        "status": 0,
        "executed": 1666961587
      },
      {
        "status": 0,
        "executed": 1666961647
      },
      {
        "status": 0,
        "executed": 1666961707
      },
      {
        "status": 0,
        "executed": 1666961767
      }
    ],
    "issued": 1666961767,
    "output": "check-memory-usage OK: 34.39% memory usage | mem_total=92635213824, mem_available=19427577856, mem_used=31860899840, mem_free=12053413888\n",
    "state": "passing",
    "status": 0,
    "total_state_change": 0,
    "last_ok": 1666961767,
    "occurrences": 15694,
    "occurrences_watermark": 15694,
    "output_metric_format": "nagios_perfdata",
    "output_metric_handlers": [
      "prometheus-pushgateway-handler"
    ],
    "env_vars": null,
    "metadata": {
      "name": "check_memory",
      "namespace": "default",
      "labels": {
        "contacts": "adm-sisdig,adm-infra-linux",
        "sensu.io/managed_by": "sensuctl",
        "severity": "minor"
      },
      "annotations": {
        "fatigue_check/allow_resolution": "true",
        "fatigue_check/interval": "82800",
        "fatigue_check/occurrences": "10"
      }
    },
    "secrets": null,
    "is_silenced": false,
    "output_metric_tags": [
      {
        "name": "check_name",
        "value": "check-memory-usage"
      },
      {
        "name": "prom_instance",
        "value": "esscdia01dbpro.lares.dsd"
      }
    ],
    "scheduler": "memory",
    "processed_by": "esscdia01dbpro.lares.dsd",
    "pipelines": []
  },
  "entity": {
    "entity_class": "agent",
    "system": {
      "hostname": "esappcdia1bd",
      "os": "linux",
      "platform": "oracle",
      "platform_family": "rhel",
      "platform_version": "7.6",
      "network": {
        "interfaces": [
          {
            "name": "lo",
            "addresses": [
              "127.0.0.1/8"
            ]
          },
          {
            "name": "ens160",
            "mac": "00:50:56:a7:b7:cd",
            "addresses": [
              "10.208.162.150/24"
            ]
          }
        ]
      },
      "arch": "amd64",
      "libc_type": "glibc",
      "vm_system": "",
      "vm_role": "",
      "cloud_provider": "",
      "processes": null
    },
    "subscriptions": [
      "basic-linux",
      "sc",
      "sc-pro",
      "sc-pro-db",
      "entity:esscdia01dbpro.lares.dsd"
    ],
    "last_seen": 1666961767,
    "deregister": false,
    "deregistration": {},
    "user": "agent",
    "redact": [
      "password",
      "passwd",
      "pass",
      "api_key",
      "api_token",
      "access_key",
      "secret_key",
      "private_key",
      "secret"
    ],
    "metadata": {
      "name": "esscdia01dbpro.lares.dsd",
      "namespace": "default",
      "labels": {
        "check_cpu.contacts": "com-adm-infra-linux",
        "check_disk_mount.contacts": "com-adm-infra-linux,oper-sede",
        "check_disk_usage.contacts": "com-adm-infra-linux",
        "check_disk_usage.severity": "critical",
        "check_disk_usage.use.warning": "95",
        "check_memory.contacts": "com-adm-infra-linux",
        "check_swap.contacts": "com-adm-infra-linux",
        "contacts": "es-adm-web-fidelizacion,adm-monitorizacion,adm-sisdig,adm-mon-dba-oracle",
        "country": "es",
        "keepalive.contacts": "com-adm-infra-linux,oper-sede",
        "oracle.connect": "(DESCRIPTION =(ADDRESS_LIST = (ADDRESS = (PROTOCOL = TCP)(HOST = esscdia02dbpro)(PORT = 1521))(ADDRESS = (PROTOCOL = TCP)(HOST = esscdia01dbpro)(PORT = 1521)))(CONNECT_DATA = (SERVICE_NAME = SCES)))",
        "service": "sc"
      }
    },
    "sensu_agent_version": "6.7.4"
  },
  "id": "cae2846d-e822-4d00-956f-477991f2a7b2",
  "metadata": {
    "namespace": "default"
  },
  "pipelines": [
    {
      "name": "alerts",
      "type": "Pipeline",
      "api_version": "core/v2"
    }
  ],
  "sequence": 10575,
  "timestamp": 1666961767
}



data = JSON.parse(JSON.stringify(event));
data.check.metadata.labels.all_contacts = `${data.check.metadata.labels.contacts},${data.entity.metadata.labels.contacts},${data.entity.metadata.labels[data.check.metadata.name + ".contacts"]}`;
return JSON.stringify(data)