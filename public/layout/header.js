import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Link from "next/link";
// import LogoMain from "../../public/assets/images/logo.png";
import Image from "next/image";

export const Header = () => {
    return (
        <>
            <header>
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="main-header d-flex justify-content-between align-items-center">
                                <div className="header-logo">
                                    <Link href="#">
                                        <Image
                                            className="object-fit-contain"
                                            src="/assets/images/logo.png"
                                            width={200}
                                            height={200}
                                            alt="logo"
                                        />
                                    </Link>
                                </div>
                                <div className="top-right-header desktop-icon-header d-flex justify-content-between align-items-center">
                                    <div className="main-links-header h-auto">
                                        <Link href="#" className="feature-btn">
                                            Features
                                        </Link>
                                    </div>
                                    <Link href="#" className="btn-signup h-auto">
                                        Signup/Login
                                    </Link>
                                </div>

                                {/* mobile header top right icons */}

                                <div className="top-right-header mobile-icon-header d-flex justify-content-between align-items-center">
                                    <div className="main-links-header h-auto">
                                        <Link href="#" className="feature-btn">
                                            <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 85 81" width="85" height="81">
                                                <title> </title>
                                                <defs>
                                                    <image width="219" height="81" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAABRCAMAAABsdiPMAAAAAXNSR0IB2cksfwAAAEhQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////53h4sAAAABh0Uk5TAH+/78+fIBBAr9//j2AwgFCQb3CgsF8fX5oa8AAABctJREFUeJzNXNmiqyoMbUXFedj2nPv/f3prt4EIYRTqWa9qYLFICIH28fDEs2BlVfu+nRO8ebYd6/u+K4YxQY942e9g03VTF9EMrMcoRn7RYnVY6q4auoim6DV0z0udqoWhOVUvo7pBMPuwGy8YrYQZdqNwC6OpvTFEd6tGVu4T7mlktksXG1QqZOQ24azUosnVJyM3CXeixopqnte2u06uOnG7R7gf1IOigS7UG6JXRpg9y3aPcLUMI8VZH8RuCLcLsoH5O4QTBNimPqpLQa4JNSuGbIQGvi/cKJyKSoxe0bMSnLh7bLcJB6PK6HghyAWu4XUnvuOg4LeFGx195zAtA4WTsj0e803CQapVmV4Q4S7I45Bsj7uEg55bVjAY9TXELkyH7mTiu8KBnxtlk6POQuxi2e4Srj0atSUeEE4CNphn2W4SrvMIFEt4pOyUT4Rw2hKaD9zHl7xeOkGVTQrXWb5KjMlLks7pk/QHyKwQ7spWNwzN0aI9vh9LXOFrVZftDuH8uBUh3Pg06rIh4YbmSxU94LZY3/Lj9ia1VSXaGJ0lmuWDvmznsckdMmHp9vK3P4bHGinSKNcqMiwvxWtx0kSK9qzZ8F42ip3HdIP1TVmb+NNcG6Pmgi7cCUVyN4S8xDZssIE+5yXcpJdBNrNwB5IX1iGftCR64JNKPjnYe0q4sEO45MuD6LhZONiJKUu3TTZWVpQHL1VhpRdct3AA9m/GYo9h/6ZWsQ5SXbWOk81zeLPMrYFi6mQTJqVx0EAfZcbwc7dY167j4h8OSIqp8zHhBIZ6yWBqWJ6NtCGklNabBflt8kgphCO33qJlzdGX3vqhL7gsE/rn4t4Qxpk2J9DBlT5fZEi/EL0RtTLD8j3JWa8cTP/IJ1TYS0AuMzU0K3d2IqTUOO2gz3Qvk6tzU1MShs85zlB5neMgcjFrUy0byUXNmQ2ZgwX68G9wq1+h5iBni4MXyH2J2uMxmpOh1tpwNDlErci8Ta1bglZPHVwpQORCciZE7XWl334YieyXze4hRWH26d3Yd6m90byUe0Gb12QZw8l9ndqOZm7Lz32ucvW/zxVM7hZqkQgkhzKhf55aILlvUqvHbZ43Q6VpGufZowwVQG6yZ6npwDe5QSxUD+NLJR6Wg939JDnX4fEq3sx6GlcrFyb7stp+S9r1NA7qtriw7ouFHKYSLUCMQk5qrgKjDmsNETarri5DpSXDVlRgchQYSVicCbjZzxbeyM/tb6hovzBnl5B8Obdyx5jmO61yXCs0w5izQ0LqbPrl+2Ikfkxdjyd37KHdd2wgAc10+XzCfZ330Dht5IVltr6XNt6M+KHBUY6nrjAZdTcgAHjvJIsB9fgqEYWeFRt6+JIPyL0MDJc7skOgzLNyV8Zu8mnZE5F50yvfckDIMi2o4VE4Yb4KR0DU8sPKU1xsX6lZ6R0mhWdmCZRVFLUHqpMT4hzEtZtR/Kn5FUzvDKUEIVvwuYk4TyRchb6o8cl9CmUoMgZKSFYjEgO416DfWyMPxUVW1548FKxkCJQw+DFHFDArtQfQXzQXTvkqLseHX6LyBUxJ72s+GI2JG2T3cvqpZUHELlugvLZ0MgM3mOgQH6iqmWB3qJ8+UEKwjjs1Ww3cipMjUr832/GssZH0gfJ16kUoNgM3hia6idku1WeTpE/gRAi6eaZhobmh8KAyU9xu/0Ed5GfJb4pe49bQ3ERY15htp1T0l122QJmFGyzHSgQ5au7qjyK7Q8uYnzBZkYXb2hNApwkNWcCI9HkzsnAjoodyTkItCv1/cZ0wAhaXOQoVzU0vvug/WCfYOetGgTActIVBscnV53S1b1PZpQ6UjsPtKG7K7S418ZfvKY2n5jb1CaAaxXPSyOzD7rQgJF+8yZgWBi3AycNTKzOFXfqE0nVj1QN6nn102Otn/MDu0kUwh+1YMCq8je+Nd+frP3v24nOWHoOljauY78QKU594UF//if80IfE/0Qy7DaYvkxoAAAAASUVORK5CYII=" />
                                                </defs>
                                                <style>
                                                </style>
                                                <use id="Background" href="#img1" x="0" y="0" />
                                            </svg>
                                        </Link>
                                    </div>
                                    <Link href="#" className="btn-signup h-auto">
                                        <svg xmlns="http://www.w3.org/2000/svg" version="1.2" viewBox="0 0 69 80" width="69" height="80">
                                            <title> </title>
                                            <defs>
                                                <image width="219" height="81" id="img1" href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANsAAABRCAMAAABsdiPMAAAAAXNSR0IB2cksfwAAAEhQTFRFAAAA////////////////////////////////////////////////////////////////////////////////////////////53h4sAAAABh0Uk5TAH+/78+fIBBAr9//j2AwgFCQb3CgsF8fX5oa8AAABctJREFUeJzNXNmiqyoMbUXFedj2nPv/f3prt4EIYRTqWa9qYLFICIH28fDEs2BlVfu+nRO8ebYd6/u+K4YxQY942e9g03VTF9EMrMcoRn7RYnVY6q4auoim6DV0z0udqoWhOVUvo7pBMPuwGy8YrYQZdqNwC6OpvTFEd6tGVu4T7mlktksXG1QqZOQ24azUosnVJyM3CXeixopqnte2u06uOnG7R7gf1IOigS7UG6JXRpg9y3aPcLUMI8VZH8RuCLcLsoH5O4QTBNimPqpLQa4JNSuGbIQGvi/cKJyKSoxe0bMSnLh7bLcJB6PK6HghyAWu4XUnvuOg4LeFGx195zAtA4WTsj0e803CQapVmV4Q4S7I45Bsj7uEg55bVjAY9TXELkyH7mTiu8KBnxtlk6POQuxi2e4Srj0atSUeEE4CNphn2W4SrvMIFEt4pOyUT4Rw2hKaD9zHl7xeOkGVTQrXWb5KjMlLks7pk/QHyKwQ7spWNwzN0aI9vh9LXOFrVZftDuH8uBUh3Pg06rIh4YbmSxU94LZY3/Lj9ia1VSXaGJ0lmuWDvmznsckdMmHp9vK3P4bHGinSKNcqMiwvxWtx0kSK9qzZ8F42ip3HdIP1TVmb+NNcG6Pmgi7cCUVyN4S8xDZssIE+5yXcpJdBNrNwB5IX1iGftCR64JNKPjnYe0q4sEO45MuD6LhZONiJKUu3TTZWVpQHL1VhpRdct3AA9m/GYo9h/6ZWsQ5SXbWOk81zeLPMrYFi6mQTJqVx0EAfZcbwc7dY167j4h8OSIqp8zHhBIZ6yWBqWJ6NtCGklNabBflt8kgphCO33qJlzdGX3vqhL7gsE/rn4t4Qxpk2J9DBlT5fZEi/EL0RtTLD8j3JWa8cTP/IJ1TYS0AuMzU0K3d2IqTUOO2gz3Qvk6tzU1MShs85zlB5neMgcjFrUy0byUXNmQ2ZgwX68G9wq1+h5iBni4MXyH2J2uMxmpOh1tpwNDlErci8Ta1bglZPHVwpQORCciZE7XWl334YieyXze4hRWH26d3Yd6m90byUe0Gb12QZw8l9ndqOZm7Lz32ucvW/zxVM7hZqkQgkhzKhf55aILlvUqvHbZ43Q6VpGufZowwVQG6yZ6npwDe5QSxUD+NLJR6Wg939JDnX4fEq3sx6GlcrFyb7stp+S9r1NA7qtriw7ouFHKYSLUCMQk5qrgKjDmsNETarri5DpSXDVlRgchQYSVicCbjZzxbeyM/tb6hovzBnl5B8Obdyx5jmO61yXCs0w5izQ0LqbPrl+2Ikfkxdjyd37KHdd2wgAc10+XzCfZ330Dht5IVltr6XNt6M+KHBUY6nrjAZdTcgAHjvJIsB9fgqEYWeFRt6+JIPyL0MDJc7skOgzLNyV8Zu8mnZE5F50yvfckDIMi2o4VE4Yb4KR0DU8sPKU1xsX6lZ6R0mhWdmCZRVFLUHqpMT4hzEtZtR/Kn5FUzvDKUEIVvwuYk4TyRchb6o8cl9CmUoMgZKSFYjEgO416DfWyMPxUVW1548FKxkCJQw+DFHFDArtQfQXzQXTvkqLseHX6LyBUxJ72s+GI2JG2T3cvqpZUHELlugvLZ0MgM3mOgQH6iqmWB3qJ8+UEKwjjs1Ww3cipMjUr832/GssZH0gfJ16kUoNgM3hia6idku1WeTpE/gRAi6eaZhobmh8KAyU9xu/0Ed5GfJb4pe49bQ3ERY15htp1T0l122QJmFGyzHSgQ5au7qjyK7Q8uYnzBZkYXb2hNApwkNWcCI9HkzsnAjoodyTkItCv1/cZ0wAhaXOQoVzU0vvug/WCfYOetGgTActIVBscnV53S1b1PZpQ6UjsPtKG7K7S418ZfvKY2n5jb1CaAaxXPSyOzD7rQgJF+8yZgWBi3AycNTKzOFXfqE0nVj1QN6nn102Otn/MDu0kUwh+1YMCq8je+Nd+frP3v24nOWHoOljauY78QKU594UF//if80IfE/0Qy7DaYvkxoAAAAASUVORK5CYII=" />
                                            </defs>
                                            <style>
                                            </style>
                                            <use id="Background" href="#img1" x="-150" y="0" />
                                        </svg>
                                    </Link>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </header>
        </>
    );
};
