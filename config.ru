use Rack::Static,
  :urls => ["/assets/css", "/assets/js", "/assets/images"],
  :root => "public"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=0'
    },
    File.open('public/index.html', File::RDONLY)
  ]
}