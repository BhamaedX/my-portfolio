function About() {
  return (
    <section id="about">
      <div className="about-heading">
        <p>ABOUT</p>
        <h2>A little about me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm an Electronics and Communication Engineering undergraduate
            who enjoys understanding how systems work beneath the surface—
            not just using technology, but exploring the concepts and
            mechanisms that make it possible.
          </p>

          <p>
            I'm drawn to projects that challenge me to step outside my
            comfort zone, push my limits, and turn ideas into practical
            solutions.
          </p>

          <p>
            Currently, I'm expanding my knowledge in Arduino, Raspberry Pi,
            and semiconductor technology while continuing to explore AI/ML,
            embedded systems, IoT, and hardware security.
          </p>
        </div>

        <div className="about-card">
          <p>Currently exploring</p>

          <h3>
            AI × Hardware
          </h3>

          <span>Embedded Systems</span>
          <span>Semiconductors</span>
          <span>IoT</span>
          <span>Hardware Security</span>
        </div>
      </div>
    </section>
  )
}

export default About