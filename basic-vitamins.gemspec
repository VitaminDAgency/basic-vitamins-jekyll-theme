# coding: utf-8

Gem::Specification.new do |spec|
  spec.name          = "basic-vitamins"
  spec.version       = "0.1.1"
  spec.authors       = ["Kory Calmes"]
  spec.email         = ["kory@calmes.org"]

  spec.summary       = "This gem hold the basic build blocks theme for vitamind marketing websites built in jekyll"
  spec.homepage      = "https://github.com/VitaminDAgency/basic-vitamins-jekyll-theme"
  spec.license       = "MIT"

  spec.files         = `git ls-files -z`.split("\x0").select { |f| f.match(%r{^(assets|_layouts|_includes|_sass|LICENSE|README)}i) }

  spec.add_runtime_dependency "jekyll", "~> 3.3"

  spec.add_development_dependency "bundler", "~> 1.12"
  spec.add_development_dependency "rake", "~> 10.0"
end
