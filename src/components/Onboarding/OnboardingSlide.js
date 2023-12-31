import { Grid, Img } from '..';
import Carousel from 'react-material-ui-carousel';
import onboarding1 from '../../assets/images/onboarding1.svg';
import onboarding2 from '../../assets/images/onboarding2.svg';
import onboarding3 from '../../assets/images/onboarding3.svg';

function OnboardingSlide() {
	const items = [
		{
			image: onboarding1,
			content:
				'Link Stock은 사용자의 소비 습관에 기반하여  <strong>맞춤형 주식 투자 기회</strong>를 제공하는 플랫폼입니다. 당신의 소비가 미래의 재테크로 연결되는 여정을 시작해보세요!',
		},
		{
			image: onboarding2,
			content:
				"시작하기 앞서,  <strong> '내 소비'</strong> 를 통해 여러분의 신용카드를 Link Stock과 연동해주세요. 단 몇 번의 클릭으로 여러분의 소비 패턴을 분석할 수 있습니다. ",
		},
		{
			image: onboarding3,
			content:
				"소비 확인을 마쳤다면 <strong>'주주되기' </strong>를 통해 지출 카테고리와 관련된 개인화된 주식 종목을 추천해드립니다. 여러분의 일상적인 소비가 투자 전략의 기반이 되어 <strong>주주가 되는 길</strong>로 향할 수 있습니다!",
		},
	];
	return (
		<>
			<Carousel
				autoPlay={false}
				animation='slide'
				timeout={500}
				navButtonsAlwaysVisible={true}
				navButtonsAlwaysInvisible={false}>
				{items.map((item, i) => (
					<div style={{ height: 450 }} key={i}>
						<Img theme='onboardingImg' src={item.image} alt='onboarding' />

						<Grid theme='onboardingContent'>
							<div dangerouslySetInnerHTML={{ __html: item.content }} />
						</Grid>
					</div>
				))}
			</Carousel>
		</>
	);
}

export default OnboardingSlide;
