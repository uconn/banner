<?php
declare(strict_types=1);

use PHPUnit\Framework\TestCase;
use SteveGrunwell\PHPUnit_Markup_Assertions\MarkupAssertionsTrait;
use UConn\Banner\Banner;

class BannerTest extends TestCase {
    use MarkupAssertionsTrait;

    /** @test */
    public function a_banner_can_be_created(): void {
        $banner = new Banner();
        $this->assertInstanceOf(Banner::class, $banner);
    }

    /** @test */
    public function a_standard_banner_has_a_wordmark(): void {
        $banner = new Banner();

        $banner->alternative = false;

        $this->assertContainsSelector('#wordmark', $banner, 'wordmark element did not have the correct ID');
        // $this->assertStringContainsString('UConn', $banner, 'Banner did not contain the UCONN wordmark');
        $this->assertContainsSelector('#university-of-connecticut', $banner, 'Banner did not contain the University of Connecticut wordmark');
    }
}

// namespace MyApp\Tests\Http;

// class RequestTest extends \PHPUnit_Framework_TestCase
// {
//     /**
//      * @var Request
//      */
//     protected $request;

//     public function setUp()
//     {
//         $this->request = new Request();
//     }

//     public function testGet()
//     {
//         $request = new Request(array('q1' => 'query1'));

//         $this->assertEquals('query1', $request->get('q1', false));
//     }

//     public function testGetKeyNotFoundReturnsDefaultNull()
//     {
//         $request = new Request(array('q1' => 'query1'));

//         $this->assertNull($request->get('q3'));
//     }

//     public function testGetKeyNotFoundReturnsCustomEmptyArray()
//     {
//         $request = new Request(array('q1' => 'query1'));

//         $this->assertEquals(array(), $request->get('q3', array()));
//     }

//     public function testGetPost()
//     {
//         $request = new Request(array(), array('p1' => 'post1'));

//         $this->assertEquals('post1', $request->getPost('p1', false));


//     }

//     public function testGetQuery()
//     {
//         $request = new Request(array('q1' => 'query1'));

//         $this->assertEquals('query1', $request->getQuery('q1', false));
//     }

// }
