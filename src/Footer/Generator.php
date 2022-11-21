<?php

namespace UConn\Banner\Footer;

require dirname(__DIR__, 2) . '/vendor/autoload.php';
require 'Footer.php';

use League\CLImate\CLImate as Cli;

class Generator {
  protected $cli;

  public function __construct()
  {
    $this->cli = new Cli();
    $this->cli->description('CLI to generate UConn brand compliant footers');
    $this->cli->arguments->add([
      'help' => [
        'longPrefix' => 'help',
        'description' => 'Prints a usage statement',
        'noValue' => true
      ],
      'path' => [
        'prefix' => 'p',
        'longPrefix' => 'path',
        'description' => 'File path with name to save footer (ex ./my-footer.html)',
        'required' => true,
        'defaultValue' => './uconn-footer.html'
      ],
      'is-health-footer' => [
        'longPrefix' => 'is-health-footer',
        'description' => 'Choose if the main text/url should go to uconn.edu or health.uconn.edu',
        'defaultValue' => false,
        'castTo' => 'bool'
      ],
      'contact-text' => [
        'longPrefix' => 'contact-text',
        'description' => 'The "Contact Us" text',
        'defaultValue' => 'Contact Us',
        'required' => true
      ],
      'contact-link' => [
        'longPrefix' => 'contact-link',
        'description' => 'Link to the site contact',
        'defaultValue' => '#',
        'required' => true
      ]
    ]);

    $this->cli->arguments->parse();
  }
  public function getCli() {
    return $this->cli;
  }

  public function outputFooterToFile() {
    $footer = new Footer();
    $isHealthFooter = $this->cli->arguments->get('is-health-footer');

    if ($isHealthFooter) {
      $footer->uconnText = "© UConn Health";
      $footer->uconnLink = "https://health.uconn.edu";
    }

    $footer->contactLink = $this->cli->arguments->get('contact-link');
    $footer->contactText = $this->cli->arguments->get('contact-text');

    // strip the head matter from the final output
    $pattern = '/(---[\n\r])[\w:. ]*/i';
    $footer = preg_replace($pattern, '', $footer);

    file_put_contents($this->cli->arguments->get('path'), $footer);
  }
}

$g = new Generator();
$cli = $g->getCli();

if ($cli->arguments->get('help')) {
  $cli->usage();
} else {
  $g->outputFooterToFile();
}