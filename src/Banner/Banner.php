<?php


namespace UConn\Banner;

use Exception;
use Liquid\Template;
use Spatie\YamlFrontMatter\YamlFrontMatter;

/**
 * Banner class to generate the banner.
 *
 * @param string $name
 * @param string $school
 * @param string $school_abbreviation
 * @param string $url
 * @param string $search
 * @param string $a_z_url
 * @param string $mobile_menu_id
 * @param bool $invert_banner_color
 * @param bool $header
 * @param bool $alternative
 * @param bool $a_z_dropdown
 * @param bool $use_mobile_menu
 */
class Banner
{
    private $name;
    private $school;
    private $school_abbreviation;
    private $url;
    private $header;
    private $search;
    private $alternative;
    private $a_z_dropdown;
    private $a_z_url;
    private $use_mobile_menu;
    private $mobile_menu_id;
    private $invert_banner_color;

    public function __construct()
    {
        $config                    = file_get_contents(dirname(__FILE__, 3) . '/_data/config.json');
        $settings                  = json_decode($config, true);
        $this->name                = $settings['name'];
        $this->school              = $settings['school'];
        $this->school_abbreviation = $settings['school_abbreviation'];
        $this->url                 = $settings['school_url'];
        $this->header              = $settings['show_header'];
        $this->search              = $settings['search'];
        $this->alternative         = $settings['alternative'];
        $this->a_z_dropdown        = $settings['a_z_dropdown'];
        $this->a_z_url             = $settings['a_z_url'];
        $this->use_mobile_menu     = $settings['use_mobile_menu'];
        $this->mobile_menu_id      = $settings['mobile_menu_id'];
        $this->invert_banner_color = $settings['invert_banner_color'];
    }

    public function __set($index, $val)
    {
        if (property_exists($this, $index)) {
            $this->$index = $val;
        }
    }

    public function __get($index)
    {
        if (property_exists($this, $index)) {
            return $this->$index;
        }
    }

    private function buildVars(): array
    {
        return array(
            'site' => array(
                'name'                => $this->name,
                'school'              => $this->school,
                'school_abbreviation' => $this->school_abbreviation,
                'school_url'          => $this->url,
                'show_header'         => $this->header,
                'search'              => $this->search,
                'alternative'         => $this->alternative,
                'a_z_dropdown'        => $this->a_z_dropdown,
                'a_z_url'             => $this->a_z_url,
                'use_mobile_menu'     => $this->use_mobile_menu,
                'mobile_menu_id'      => $this->mobile_menu_id,
                'invert_banner_color' => $this->invert_banner_color
            )
        );
    }

    /**
     * Use YAML Front Matter to parse the banner template, then Liquid to render it.
     *
     * @return string HTML for the banner or error message
     */
    public function __toString(): string
    {
        $liquid = new Template();
        $templatePath = dirname(__FILE__) . '/../../_includes/banner.html';
        if (!file_exists($templatePath)) {
            return "Error: Banner template not found.";
        }
        $rawContent = file_get_contents($templatePath);
        try {
            $document = YamlFrontMatter::parse($rawContent);
            $liquidContent = $document->body();
            $template = $liquid->parse($liquidContent);
            return $template->render($this->buildVars());
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
        return file_get_contents(dirname(__FILE__) . '/../../_site/banner.css');
    }

    public static function js()
    {
        return file_get_contents(dirname(__FILE__) . '/../../_site/banner.js');
    }
}

