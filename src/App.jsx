import './App.css'
import { useEffect, useRef } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import heroBackground from './assets/hero-background.png'
import keystonePerson from './assets/keystone-person.png'
import butterflyLogo from './assets/butterfly-logo.png'
import abstractGraphic from './assets/abstract-graphic.png'
import decorativeShapes from './assets/decorative-shapes.svg'
import FoHPage from './FoHPage'
import Navbar from "./components/Navbar.jsx";

function HomePage() {
  const wordsContainerRef = useRef(null)
  const hasAnimated = useRef(false)
  const arrowTimers = useRef({})

  useEffect(() => {
    const animateWords = () => {
      // 添加0.5秒延迟
      setTimeout(() => {
        const words = document.querySelectorAll('.word-item')
        console.log('Found words:', words.length) // 调试信息
        
        // 同时触发abstract-graphic动画
        const abstractGraphic = document.querySelector('.abstract-graphic')
        if (abstractGraphic) {
          abstractGraphic.classList.add('animate-up')
        }
        
        words.forEach((word, index) => {
          // 从下到上：最后一个元素(index=4)先开始，第一个元素(index=0)最后开始
          const reverseIndex = words.length - 1 - index
          setTimeout(() => {
            console.log(`Animating word ${reverseIndex}`) // 调试信息
            // 同时添加闪块动画和显示文字
            word.classList.add('flash', 'show')
            setTimeout(() => {
              // 先让色块消失
              word.classList.add('fade-out')
              setTimeout(() => {
                // 然后移除所有动画类，但保留文字显示
                word.classList.remove('flash', 'fade-out')
              }, 200)
            }, 300)
          }, reverseIndex * 180)
        })
      }, 500) // 0.5秒延迟
    }

    // 第三页动画函数
    const animateSection3 = () => {
      console.log('Animating section 3')
      
      // 立即开始decorative-shapes向上移动动画
      const decorativeShapes = document.querySelector('.decorative-shapes')
      if (decorativeShapes) {
        decorativeShapes.style.transition = 'transform 3s ease-out'
        decorativeShapes.style.transform = 'translateY(-40px)'
      }
      
      // 0.3秒后显示中文
      setTimeout(() => {
        const chineseText = document.querySelector('.chinese-text')
        if (chineseText) {
          chineseText.classList.add('show')
        }
      }, 300)
      
      // 0.6秒后显示英文
      setTimeout(() => {
        const englishText = document.querySelector('.english-text')
        if (englishText) {
          englishText.classList.add('show')
        }
      }, 600)
      
      // 1.3秒后随机显示标题的每个字母
      setTimeout(() => {
        const title = document.querySelector('.overview-title')
        if (title) {
          const text = title.textContent
          title.textContent = ''
          title.style.opacity = '1'
          
          // 将每个字母包装在span中
          const letters = text.split('').map(letter => {
            const span = document.createElement('span')
            span.textContent = letter
            span.style.opacity = '0'
            span.style.filter = 'blur(10px)'
            span.style.transform = 'translateX(-50px)'
            span.style.transition = 'opacity 1s ease-out, filter 1s ease-out, transform 1s ease-out'
            return span
          })
          
          // 将字母添加到标题中（保持原始顺序）
          letters.forEach(span => title.appendChild(span))
          
          // 随机显示每个字母
          letters.forEach((span, index) => {
            setTimeout(() => {
              span.style.opacity = '1'
              span.style.filter = 'blur(0px)'
              
            }, Math.random() * 2000) // 每个字母在0-2000ms内随机出现
          })
        }
      }, 600)
    }

    // 使用 Intersection Observer 替代滚动监听
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          console.log('Words section is visible, triggering animation!')
          hasAnimated.current = true
          animateWords()
        }
      })
    }, {
      threshold: 0.5 // 当50%的元素可见时触发
    })

    // 第三页动画观察器
    const observer3 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Section 3 is visible, triggering animation!')
          animateSection3()
        }
      })
    }, {
      threshold: 0.5
    })

    // 第四页动画函数
    const animateSection4 = () => {
      console.log('Animating section 4')
      
      // 立即开始背景图片上移动画
      const blurredImage = document.querySelector('.blurred-image')
      if (blurredImage) {
        blurredImage.classList.add('animate-up')
      }
      
      // 0.5秒后显示link和英文部分（同时出现）
      setTimeout(() => {
        const englishDescription = document.querySelector('.english-description')
        const moreInfoLink = document.querySelector('.more-info-link')
        if (englishDescription) {
          englishDescription.classList.add('show')
        }
        if (moreInfoLink) {
          moreInfoLink.classList.add('show')
        }
      }, 500)
      
      // 1秒后显示中文
      setTimeout(() => {
        const chineseDescription = document.querySelector('.chinese-description')
        if (chineseDescription) {
          chineseDescription.classList.add('show')
        }
      }, 1000)
      
      // 1.5秒后随机显示title和location
      setTimeout(() => {
        // 随机显示title
        const title = document.querySelector('.keystone-title')
        if (title) {
          const text = title.textContent
          title.textContent = ''
          title.style.opacity = '1'
          
          // 将每个字母包装在span中
          const letters = text.split('').map(letter => {
            const span = document.createElement('span')
            span.textContent = letter
            span.style.opacity = '0'
            span.style.filter = 'blur(10px)'
            span.style.transform = 'translateX(-50px)'
            span.style.transition = 'opacity 1s ease-out, filter 1s ease-out, transform 1s ease-out'
            return span
          })
          
          // 将字母添加到标题中（保持原始顺序）
          letters.forEach(span => title.appendChild(span))
          
          // 随机显示每个字母
          letters.forEach((span, index) => {
            setTimeout(() => {
              span.style.opacity = '1'
              span.style.filter = 'blur(0px)'
              span.style.transform = 'translateX(0px)'
            }, Math.random() * 2000) // 每个字母在0-2000ms内随机出现
          })
        }
        
        // 随机显示location
        const location = document.querySelector('.section-identifier')
        if (location) {
          const text = location.textContent
          location.textContent = ''
          location.style.opacity = '1'
          
          // 将每个字母包装在span中
          const letters = text.split('').map(letter => {
            const span = document.createElement('span')
            span.textContent = letter
            span.style.opacity = '0'
            span.style.filter = 'blur(10px)'
            span.style.transform = 'translateX(-50px)'
            span.style.transition = 'opacity 1s ease-out, filter 1s ease-out, transform 1s ease-out'
            return span
          })
          
          // 将字母添加到location中（保持原始顺序）
          letters.forEach(span => location.appendChild(span))
          
          // 随机显示每个字母
          letters.forEach((span, index) => {
            setTimeout(() => {
              span.style.opacity = '1'
              span.style.filter = 'blur(0px)'
              span.style.transform = 'translateX(0px)'
            }, Math.random() * 2000) // 每个字母在0-2000ms内随机出现
          })
        }
      }, 1500)
    }

    // 第四页动画观察器
    const observer4 = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log('Section 4 is visible, triggering animation!')
          animateSection4()
        }
      })
    }, {
      threshold: 0.5
    })

    // 箭头控制函数
    const showArrow = (arrowId) => {
      const arrow = document.getElementById(arrowId)
      if (arrow) {
        arrow.classList.add('show')
      }
    }

    const hideArrow = (arrowId) => {
      const arrow = document.getElementById(arrowId)
      if (arrow) {
        arrow.classList.remove('show')
      }
    }

    // 箭头观察器
    const arrowObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id || entry.target.className
        const arrowId = `arrow-${sectionId.includes('hero') ? '1' : sectionId.includes('words') ? '2' : '3'}`
        
        if (entry.isIntersecting) {
          // 清除之前的定时器
          if (arrowTimers.current[arrowId]) {
            clearTimeout(arrowTimers.current[arrowId])
          }
          
          // 2秒后显示箭头
          arrowTimers.current[arrowId] = setTimeout(() => {
            showArrow(arrowId)
          }, 2000)
        } else {
          // 离开section时隐藏箭头
          if (arrowTimers.current[arrowId]) {
            clearTimeout(arrowTimers.current[arrowId])
          }
          hideArrow(arrowId)
        }
      })
    }, {
      threshold: 0.5
    })

    // 等待DOM加载完成后观察元素
    const timer = setTimeout(() => {
      const wordsSection = document.querySelector('.words-section')
      if (wordsSection) {
        console.log('Observing words section')
        observer.observe(wordsSection)
      } else {
        console.log('Words section not found')
      }
      
      const section3 = document.querySelector('.event-overview-section')
      if (section3) {
        console.log('Observing section 3')
        observer3.observe(section3)
      } else {
        console.log('Section 3 not found')
      }

      const section4 = document.querySelector('.keystone-section')
      if (section4) {
        console.log('Observing section 4')
        observer4.observe(section4)
      } else {
        console.log('Section 4 not found')
      }

      // 观察所有section以控制箭头
      const sections = [
        document.querySelector('.hero-section'),
        document.querySelector('.words-section'),
        document.querySelector('.event-overview-section'),
        document.querySelector('.keystone-section')
      ]
      
      sections.forEach(section => {
        if (section) {
          arrowObserver.observe(section)
        }
      })
    }, 1000)

    return () => {
      clearTimeout(timer)
      observer.disconnect()
      observer3.disconnect()
      observer4.disconnect()
      arrowObserver.disconnect()
      
      // 清理所有箭头定时器
      Object.values(arrowTimers.current).forEach(timer => {
        if (timer) clearTimeout(timer)
      })
    }
  }, [])


  return (
      <div>
        <Navbar/>

    <div className="app">
      {/* Hero Section - Festival of Hope 2026 */}
      <section className="hero-section">
        <div className="hero-background" style={{ backgroundImage: `url(${heroBackground})` }}>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="year-numbers">
            <span className="number-2">2</span>
            <span className="number-0">0</span>
            <span className="number-2">2</span>
            <span className="number-6">6</span>
          </div>
          <div className="hero-text">
            <h2 className="chinese-title">希望行动峰会</h2>
            <h1 className="main-title">FESTIVAL OF HOPE</h1>
            <p className="academy-name">@KEYSTONE ACADEMY</p>
            <div className="decorative-lines">
              <div className="line long"></div>
            </div>
          </div>
          <div className="hero-logo">
            <img src={butterflyLogo} alt="Butterfly Logo" className="butterfly-logo" />
          </div>
        </div>
        <div className="scroll-arrow" id="arrow-1"></div>
      </section>

      {/* Five Words Section */}
      <section className="words-section">
        <div className="words-container" ref={wordsContainerRef}>
          <div className="word-item yellow">EMPATHIZE</div>
          <div className="word-item red">DISCOVERING</div>
          <div className="word-item blue">CONNECTING</div>
          <div className="word-item green">BELONGING</div>
          <div className="word-item white">ACTING</div>
        </div>
        <div className="abstract-graphic">
          <img src={abstractGraphic} alt="Abstract Graphic" />
        </div>
        <div className="scroll-arrow" id="arrow-2"></div>
      </section>

      {/* Event Overview Section */}
      <section className="event-overview-section">
        <div className="overview-background">
          <img src={decorativeShapes} alt="Decorative Shapes" className="decorative-shapes" />
        </div>
        <div className="overview-content">
          <h2 className="overview-title">EVENT OVERVIEW</h2>
          <div className="text-content">
            <p className="english-text">
              The <strong>Festival of Hope 2026 </strong>would be a <strong>two-day</strong> event where students from schools in China and abroad, youth leaders, activists, and representatives from NGOs gather both online and offline to <strong>exchange ideas and inspire action on today's global challenges through a series of activities, including workshops and keynote speeches.</strong>
            </p>
            <p className="chinese-text">
              青少年是在在全球性挑战中向着和平与新生的不屈力量。本项目旨在激发青少年的积极参与意识,通过打造一个充满活力的平台,促进对话、合作、思想交流与行动,共同应对本地及全球性挑战。通过希望行动峰会,我们希望传播青年声音,激发青年力量,赋能他们认识到自身贡献的重要价值,意识到世界上有许多杰出的人正以积极行动应对地球与社会面临的严峻挑战并由此衍生行动力与使命感
            </p>
          </div>
          <div className="academy-footer">@KEYSTONE ACADEMY</div>
        </div>
        <div className="scroll-arrow" id="arrow-3"></div>
      </section>

      {/* Keystone Academy Section */}
      <section className="keystone-section">
        <div className="keystone-background">
          <img src={keystonePerson} alt="Keystone Person" className="blurred-image" />
        </div>
        <div className="keystone-content">
          <div className="section-identifier"><strong>&gt;&gt; Location</strong></div>
          <h2 className="keystone-title">KEYSTONE ACADEMY</h2>
          <div className="keystone-descriptions">
            <p className="chinese-description">
              Keystone Academy (北京市鼎石学校) 是一所位于中国北京的国际学校, 融合中西教育传统, 提供沉浸式中英双语课程和寄宿制教育。该校以仁、义、礼、智、信为核心价值观, 致力于培养具有全球视野和文化认同的未来领袖
            </p>
            <p className="english-description">
              Keystone Academy (Beijing Dingshi School) is a bilingual school located in Beijing, China, blending Chinese and Western educational traditions to offer immersive Chinese-English bilingual courses and boarding education. The school upholds the core values of Ren, Yi, Li, Zhi, and Xin and is committed to cultivating future leaders with global perspective and cultural identity.
            </p>
            <a href="https://www.keystoneacademy.cn/en/about" className="more-info-link">click here for more information</a>
          </div>
        </div>
      </section>
    </div>
      </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/FoH" element={<FoHPage />} />
      </Routes>
    </Router>
  )
}

export default App
