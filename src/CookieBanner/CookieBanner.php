<?php

namespace UConn\Banner;

use Exception;
use Liquid\Template;
use Spatie\YamlFrontMatter\YamlFrontMatter;

class CookieBanner {
  /**
   * Use YAML Front Matter to parse the banner template, then Liquid to render it.
   *
   * @return string HTML for the banner or error message
   */
  public function __toString(): string {
    $liquid = new Template();
    $templatePath = dirname(__FILE__) . '/../../_includes/cookie-banner.html';
    if (!file_exists($templatePath)) {
      return "Error: Cookie banner template not found.";
    }
    $rawContent = file_get_contents($templatePath);
    try {
      $document = YamlFrontMatter::parse($rawContent);
      $liquidContent = $document->body();
      $template = $liquid->parse($liquidContent);
      return $template->render();
    } catch (\Exception $e) {
      return "Error processing template: " . htmlspecialchars($e->getMessage());
    }
  }

  /**
   * Outputs the CSS for the banner.
   * Sometimes it's necessary to retrieve the CSS
   * instead of including it, depending on where the
   * /vendor directory resides and whether it's
   * publicly accessible.
   * @return string CSS rules for the banner
   */
  public static function css()
  {
    return file_get_contents(dirname(__FILE__) . '/../../_site/cookie-banner.css');
  }

  public static function js()
  {
    return file_get_contents(dirname(__FILE__) . '/../../_site/cookie-banner.js');
  }
}