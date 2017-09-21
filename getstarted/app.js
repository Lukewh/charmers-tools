;(function(){
    var tryItOverlay = document.querySelector('.try-it-overlay');
    var inputOverlay = document.querySelector('.input-overlay');
    var tryItButton = document.querySelector('.try-it-button');
    var mdInput = document.querySelector('.md-text');
    var postDeploymentHolder = document.querySelector('.post-deployment');
    var showHideInput = document.querySelector('.input-overlay-hide');

    tryItButton.addEventListener('click', function(e) {
        e.preventDefault();

        tryItOverlay.classList.add('u-hide');
        inputOverlay.classList.remove('u-hide');
        postDeploymentHolder.classList.remove('u-hide');
        showHideInput.classList.remove('u-hide');
    });

    showHideInput.addEventListener('click', function(e) {
        e.preventDefault();

        if (inputOverlay.classList.contains('u-hide')) {
            inputOverlay.classList.remove('u-hide');
            showHideInput.innerText = 'Hide input';
        } else {
            inputOverlay.classList.add('u-hide');
            showHideInput.innerText = 'Show input';
        }
    });

    function PostDeployment(source, output) {
        this.source = source;
        this.output = output;
        this.metadata = null;

        this.templateTags = {
            details_link: {
              content: '<span role="button" ' +
                'class="link" ' +
                'data-templatetag="details_link">View details</span>'
            },
            requires_cli_link: {
              content: '<a ' +
                'href="https://jujucharms.com/docs/stable/reference-install" ' +
                'target="_blank">Juju CLI client</a>'
            }
        };

        this.source.addEventListener('keyup', this.update.bind(this));

        this.update();
    }

    PostDeployment.prototype.update = function() {
        var input = this.source.value;
        
        if (input && input.substring(0, 1) !== '{') {
            var frontmatterAndMarkdown = this.extractFrontmatter(input);
            this.metadata = frontmatterAndMarkdown.metadata;
            this.output.innerHTML = marked(
                this.replaceTemplateTags(
                    frontmatterAndMarkdown.markdown
                )
            );
        }
    };
    PostDeployment.prototype.extractFrontmatter = function(markdown) {
        var parsedMetadata = {};
        var lineByLine;
        markdown = markdown.trim();
        // If the first instance of a hr is at position 0 and
        // there is another hr expect metadata.
        if (markdown.indexOf('---') === 0 && markdown.indexOf('---', 1) !== -1) {
          lineByLine = markdown.split('\n');
          var metadata = [];
          lineByLine.shift();
          while(lineByLine.length > 0 && lineByLine[0] !== '---') {
            metadata.push(lineByLine.shift());
          }
          lineByLine.shift();
        
          metadata.forEach(option => {
            if (option.indexOf(':') !== -1) {
              var splitOption = option.split(':');
              parsedMetadata[splitOption[0].trim()] = splitOption[1].trim();
            } else {
              console.error(`${option} does not conform to the metadata format of
                key: value`);
            }
          });
        }

        return {
            metadata: parsedMetadata,
            markdown: lineByLine ? lineByLine.join('\n') : markdown
        };
    };
    PostDeployment.prototype.replaceTemplateTags = function(markdown) {
        var replaced = markdown;
        
        Object.keys(this.templateTags).forEach(templateTag => {
          replaced = replaced
            .split(`{${templateTag}}`)
            .join(this.templateTags[templateTag].content);
        });
        
        return replaced;
    };

    var postDeployment = new PostDeployment(mdInput, document.querySelector('.md-content'));
})();