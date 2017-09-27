# Guide to writing you charm/ bundle’s getstarted.md

**Title** (shortest recognisable form)  

**Product description** in 10-20 words. Three sentences is probably too long.
Be concrete about what it does, and how. Don't sell – the user has already got as far as choosing to try your software from the charm store.

**View details** will be inserted automatically by using the template tag `{details_link}` linking the user back to the charm or bundle page at the charmstore.

**State prerequisites** upfront, so they don't start down a path they can't finish.

**The "Get started":**
A label at the start of the minimum steps they should follow to see the charm working at some level of success. e.g get your users to a web dashboard or a REPL.

The label let’s their eye skip to the description if easily if they're already confident about having found the right charms.

**Numbered steps**. We suggest fewer than 10.

**Dos:**

- Remember your user is in the GUI. 
- Don't make assumptions about their prior experience.
- Start instruction with verbs – write in the imperative tense. 
- Write the simplest actions. Don't try to explain the details - save that for your readme. Concentrate on what they need to do to get started.
- Give them any essential information,e.g. the admin username they will need.
- Use `code blocks` for CLI commands.
- Use the format of machines, protocols, and full paths to make reaching the most important endpoints of your application obvious. 

**Further reading:** Give your user links to sensible next steps. Link to external resources, most important first.

