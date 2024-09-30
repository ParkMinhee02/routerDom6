import React from 'react';

const Cooperation = () => {
	return (
		<div className='cooperation'>
			<h1>북스리브로는<br />더 큰 가능성을 위한 다양한 제안을 기다립니다.</h1>
			<div className='content'>
				<div className="content-box">
					<h2>브랜드 입점</h2>
					<p>도서, 문구, 리빙, 음반 상품 등<br />모든 범위 안에서 입점이 가능합니다.</p>
					<form className="input-box" action="#" method="get">
						<div className="input-cont">
							<span>*업체명</span>
							<input type="text" name="cont01" />
						</div>
						<div className="input-cont">
							<span>*담당자</span>
							<input type="text" name="cont02" />
						</div>
						<div className="input-cont">
							<span>*이메일</span>
							<input type="email" name="cont03" />
						</div>
						<div className="input-cont">
							<span>*전화번호</span>
							<input type="tel" name="cont03" />
						</div>
						<input type="submit" value="다음" className='input-btn' />
					</form>
				</div>
				<div className="content-box">
					<h2>마케팅 제휴</h2>
					<p>홍보 및 광고, 전시, 공연 등<br />모든 범위 안에서 제휴가 가능합니다.</p>
					<form className="input-box" action="#" method="get">
						<div className="input-cont">
							<span>*업체명</span>
							<input type="text" name="cont01" />
						</div>
						<div className="input-cont">
							<span>*담당자</span>
							<input type="text" name="cont02" />
						</div>
						<div className="input-cont">
							<span>*이메일</span>
							<input type="email" name="cont03" />
						</div>
						<div className="input-cont">
							<span>*전화번호</span>
							<input type="tel" name="cont03" />
						</div>
						<input type="submit" value="다음" className='input-btn' />
					</form>
				</div>
				<div className="content-box">
					<h2>납품 문의</h2>
					<p>도서 납품, 특판 등의 진행이 가능합니다.</p>
					<form className="input-box mt50" action="#" method="get">
						<div className="input-cont">
							<span>*업체명</span>
							<input type="text" name="cont01" />
						</div>
						<div className="input-cont">
							<span>*담당자</span>
							<input type="text" name="cont02" />
						</div>
						<div className="input-cont">
							<span>*이메일</span>
							<input type="email" name="cont03" />
						</div>
						<div className="input-cont">
							<span>*전화번호</span>
							<input type="tel" name="cont03" />
						</div>
						<input type="submit" value="다음" className='input-btn' />
					</form>
				</div>
				<div className="content-box">
					<h2>가맹문의</h2>
					<p>첨부된 가맹제안서로 내용확인 후,<br />아래 방법으로 문의해주시기 바랍니다.</p>
					<form className="input-box" action="#" method="get">
						<div className="input-cont">
							<span>*업체명</span>
							<input type="text" name="cont01" />
						</div>
						<div className="input-cont">
							<span>*담당자</span>
							<input type="text" name="cont02" />
						</div>
						<div className="input-cont">
							<span>*이메일</span>
							<input type="email" name="cont03" />
						</div>
						<div className="input-cont">
							<span>*전화번호</span>
							<input type="tel" name="cont03" />
						</div>
						<input type="submit" value="다음" className='input-btn' />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Cooperation;