const PROXY_CONFIG = [
  {
      context: [
          "/my",
          "/many",
          "/endpoints",
          "/i",
          "/need",
          "/to",
          "/proxy",
          "/oslc"
      ],
      target: "http://localhost:8001",
      secure: false
  }
]

module.exports = PROXY_CONFIG