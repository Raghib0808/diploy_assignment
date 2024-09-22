import React from 'react'

const Header = () => {
  return (
    <div>
      <header id="main-header">
        <div className='logo'>
            <img src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"/>
        </div>
			<nav>
				<ul>
					<li class="has-submenu">
						<a href="#">Services</a>

						<ul>
							<li><a href="#">Branding</a></li>
							<li><a href="#">Web Design</a></li>
							<li><a href="#">Web Development</a></li>
							<li><a href="#">eCommerce</a></li>
							<li><a href="#">Print</a></li>
						</ul>
					</li>
					<li><a href="#">Company</a></li>
					<li><a href="#">Blog</a></li>
					<li><a href="#">Careers</a></li>
					<li><a href="#">Contact</a></li>
				</ul>
			</nav>

            <div className='header_button'>
			<button>Loging</button>
			<button>Sign Up</button>
            </div>

		</header>
    </div>
  )
}

export default Header
