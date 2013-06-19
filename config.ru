use Rack::Static,
  :urls => ["assets/images", "assets/js", "assets/css", "assets/font"],
  :root => "/"

run lambda { |env|
  [
    200,
    {
      'Content-Type'  => 'text/html',
      'Cache-Control' => 'public, max-age=86400'
    },
    File.open('index.html', File::RDONLY)
  ]
}