<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInit2bf67e8fea067690dd80b0e018b63aad
{
    public static $files = array (
        'a4a119a56e50fbb293281d9a48007e0e' => __DIR__ . '/..' . '/symfony/polyfill-php80/bootstrap.php',
    );

    public static $prefixLengthsPsr4 = array (
        'W' => 
        array (
            'WPGraphQL\\' => 10,
        ),
        'T' => 
        array (
            'TijsVerkoyen\\CssToInlineStyles\\' => 31,
        ),
        'S' => 
        array (
            'Symfony\\Polyfill\\Php80\\' => 23,
            'Symfony\\Component\\CssSelector\\' => 30,
            'Svg\\' => 4,
            'Sabberworm\\CSS\\' => 15,
        ),
        'M' => 
        array (
            'Masterminds\\' => 12,
        ),
        'J' => 
        array (
            'Jaybizzle\\CrawlerDetect\\' => 24,
        ),
        'G' => 
        array (
            'GraphQL\\' => 8,
        ),
        'F' => 
        array (
            'FontLib\\' => 8,
        ),
        'E' => 
        array (
            'EndyJasmi\\' => 10,
        ),
        'D' => 
        array (
            'Dompdf\\' => 7,
        ),
        'A' => 
        array (
            'Appsero\\' => 8,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'WPGraphQL\\' => 
        array (
            0 => __DIR__ . '/..' . '/wp-graphql/wp-graphql/src',
        ),
        'TijsVerkoyen\\CssToInlineStyles\\' => 
        array (
            0 => __DIR__ . '/..' . '/tijsverkoyen/css-to-inline-styles/src',
        ),
        'Symfony\\Polyfill\\Php80\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/polyfill-php80',
        ),
        'Symfony\\Component\\CssSelector\\' => 
        array (
            0 => __DIR__ . '/..' . '/symfony/css-selector',
        ),
        'Svg\\' => 
        array (
            0 => __DIR__ . '/..' . '/phenx/php-svg-lib/src/Svg',
        ),
        'Sabberworm\\CSS\\' => 
        array (
            0 => __DIR__ . '/..' . '/sabberworm/php-css-parser/src',
        ),
        'Masterminds\\' => 
        array (
            0 => __DIR__ . '/..' . '/masterminds/html5/src',
        ),
        'Jaybizzle\\CrawlerDetect\\' => 
        array (
            0 => __DIR__ . '/..' . '/jaybizzle/crawler-detect/src',
        ),
        'GraphQL\\' => 
        array (
            0 => __DIR__ . '/..' . '/webonyx/graphql-php/src',
        ),
        'FontLib\\' => 
        array (
            0 => __DIR__ . '/..' . '/phenx/php-font-lib/src/FontLib',
        ),
        'EndyJasmi\\' => 
        array (
            0 => __DIR__ . '/..' . '/endyjasmi/cuid/src',
        ),
        'Dompdf\\' => 
        array (
            0 => __DIR__ . '/..' . '/dompdf/dompdf/src',
        ),
        'Appsero\\' => 
        array (
            0 => __DIR__ . '/..' . '/appsero/client/src',
        ),
    );

    public static $classMap = array (
        'Attribute' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Attribute.php',
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
        'Dompdf\\Cpdf' => __DIR__ . '/..' . '/dompdf/dompdf/lib/Cpdf.php',
        'GraphQLRelay\\Connection\\ArrayConnection' => __DIR__ . '/..' . '/ivome/graphql-relay-php/src/Connection/ArrayConnection.php',
        'GraphQLRelay\\Connection\\Connection' => __DIR__ . '/..' . '/ivome/graphql-relay-php/src/Connection/Connection.php',
        'GraphQLRelay\\Mutation\\Mutation' => __DIR__ . '/..' . '/ivome/graphql-relay-php/src/Mutation/Mutation.php',
        'GraphQLRelay\\Node\\Node' => __DIR__ . '/..' . '/ivome/graphql-relay-php/src/Node/Node.php',
        'GraphQLRelay\\Node\\Plural' => __DIR__ . '/..' . '/ivome/graphql-relay-php/src/Node/Plural.php',
        'GraphQLRelay\\Relay' => __DIR__ . '/..' . '/ivome/graphql-relay-php/src/Relay.php',
        'PhpToken' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/PhpToken.php',
        'Stringable' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/Stringable.php',
        'UnhandledMatchError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/UnhandledMatchError.php',
        'ValueError' => __DIR__ . '/..' . '/symfony/polyfill-php80/Resources/stubs/ValueError.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInit2bf67e8fea067690dd80b0e018b63aad::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInit2bf67e8fea067690dd80b0e018b63aad::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInit2bf67e8fea067690dd80b0e018b63aad::$classMap;

        }, null, ClassLoader::class);
    }
}
