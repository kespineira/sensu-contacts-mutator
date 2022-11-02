package main

import (
	"fmt"

	v2 "github.com/sensu/sensu-go/api/core/v2"
	"github.com/sensu/sensu-plugin-sdk/sensu"
)

// var allContacts string

// func main() {
// 	eventJSON, err := ioutil.ReadAll(os.Stdin)

// 	if err != nil {
// 		fmt.Fprintf(os.Stderr, "Failed to read STDIN: %s", err)
// 		os.Exit(1)
// 	}

// 	event := types.Event{}
// 	err = json.Unmarshal(eventJSON, &event)

// 	if err != nil {
// 		fmt.Fprintf(os.Stderr, "Failed to unmarshal event: %s", err)
// 		os.Exit(1)
// 	}

// 	allContacts = fmt.Sprint(event.Entity.ObjectMeta.Labels["contacts"], ",", event.Check.ObjectMeta.Labels["contacts"], ",", event.Entity.ObjectMeta.Labels[fmt.Sprint(event.Check.Name, ".contacts")])

// }

type Config struct {
	sensu.PluginConfig
}

var (
	mutatorConfig = Config{
		PluginConfig: sensu.PluginConfig{
			Name:     "sensu-go-mutator-contacts",
			Short:    "A mutator that joins contacts to the event",
			Keyspace: "sensu.io/plugins/sensu-go-mutator-contacts/config",
		},
	}

	options = []sensu.ConfigOption{}
)

func main() {
	mutator := sensu.NewGoMutator(&mutatorConfig.PluginConfig, options, checkArgs, executeMutator)
	mutator.Execute()
}

func checkArgs(_ *v2.Event) error {
	return nil
}

func executeMutator(event *v2.Event) (*v2.Event, error) {
	allContacts := fmt.Sprint(event.Entity.ObjectMeta.Labels["contacts"], ",", event.Check.ObjectMeta.Labels["contacts"], ",", event.Entity.ObjectMeta.Labels[fmt.Sprint(event.Check.Name, ".contacts")])
	event.Check.ObjectMeta.Labels["all_contacts"] = allContacts
	return event, nil
}
