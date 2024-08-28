import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

import { ReactComponent as LogoSvg } from '../static/kara.svg';

// ----------------------------------------------------------------------

Logo.propTypes = {
  disabledLink: PropTypes.bool,
  sx: PropTypes.object,
};

export default function Logo({ disabledLink = false, sx }) {
  const theme = useTheme();
  const PRIMARY_LIGHT = theme.palette.primary.light;
  const PRIMARY_MAIN = theme.palette.primary.main;
  const PRIMARY_DARK = theme.palette.primary.dark;

  const logo = (
    <Box sx={{ width: 40, height: 40, ...sx }}>
      {/* <svg xmlns="http://www.w3.org/2000/svg" width="34.143" height="33.766" viewBox="0 0 34.143 33.766">
        <defs>
          <linearGradient id="linear-gradient" x1="0.5" y1="0.667" x2="0.085" y2="0.978" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={PRIMARY_MAIN}/>
            <stop offset="100%" stopColor={PRIMARY_MAIN}/>
          </linearGradient>
          <linearGradient id="linear-gradient-2" x1="0.328" y1="0.665" x2="0.093" y2="0.961" gradientUnits="objectBoundingBox">
            <stop offset="0%" stopColor={PRIMARY_MAIN}/>
            <stop offset="100%" stopColor={PRIMARY_DARK}/>
          </linearGradient>
        </defs>
        <g id="logo_kara2" data-name="logo kara2" transform="translate(5926.032 -13958.382)">
          <path id="Subtraction_35" data-name="Subtraction 35" d="M18.605,33.765H6.86a10.056,10.056,0,0,1-3.43-1.244,7.124,7.124,0,0,1-2.358-2.209A6.916,6.916,0,0,1,0,26.463V7.133A9.494,9.494,0,0,1,.977,3.566,6.49,6.49,0,0,1,3.091,1.114,6.964,6.964,0,0,1,7.081,0V24.939a1.541,1.541,0,0,0,.115.586c.438,1.9,2.554,8.11,11.409,8.238Zm-.188-17.458H13.291a2.032,2.032,0,0,1-2.031-2.028V7.014a9.227,9.227,0,0,1,1.006-3.505A6.485,6.485,0,0,1,14.4,1.1,7.137,7.137,0,0,1,18.417,0v16.3Z" transform="translate(-5926.032 13958.382)" fill="url(#linear-gradient)"/>
          <g id="Group_3428" data-name="Group 3428" transform="translate(-5918.729 13967.654)">
            <path id="Path_3425" data-name="Path 3425" d="M83.843,82V75.732c0-8.8-7.075-10.432-9.249-10.674-.406-.044-1.585-.1-1.994-.1H71.51v7.034h1.636c4.055,0,3.786,3.343,3.786,3.343v5.146a1.69,1.69,0,0,1-1.69,1.69H58.478a1.679,1.679,0,0,1-1.552-.946c.547,2.188,2.694,8.225,11.807,8.225h8.251C84.8,89.453,83.843,82,83.843,82Z" transform="translate(-57.04 -64.96)" fill="url(#linear-gradient-2)"/>
          </g>
        </g>
      </svg> */}
      
      <svg xmlns="http://www.w3.org/2000/svg" width="234" height="228.364" viewBox="0 0 234 228.364">
  <g id="Group_3453" data-name="Group 3453" transform="translate(5827 -14465.704)">
    <path id="Subtraction_42" data-name="Subtraction 42" d="M195,208H39A38.967,38.967,0,0,1,0,169V39A38.967,38.967,0,0,1,39,0H195a38.967,38.967,0,0,1,39,39V169a38.967,38.967,0,0,1-39,39ZM44,143a21.023,21.023,0,0,0-21,21v5a21.023,21.023,0,0,0,21,21H190a21.024,21.024,0,0,0,21-21v-5a21.024,21.024,0,0,0-21-21Z" transform="translate(-5827 14486.068)" fill="#cbdfe9"/>
    <path id="Union_41" data-name="Union 41" d="M63.2,187.473c0-.028,0-.092.006-.192a1.708,1.708,0,0,1,.058-.346,1.824,1.824,0,0,1,.167-.408,1.18,1.18,0,0,1,.335-.374.7.7,0,0,1,.22-.14,1.541,1.541,0,0,1,.3-.094,1.663,1.663,0,0,1,.335-.033,1.234,1.234,0,0,1,.311.037,4.392,4.392,0,0,1,.207-.515,5.968,5.968,0,0,1,.283-.529q.155-.259.323-.487A3.4,3.4,0,0,1,66.08,184a1.978,1.978,0,0,1,1.472-.639,2.418,2.418,0,0,1,.974.238,2.037,2.037,0,0,1,.743.633,3.1,3.1,0,0,1,.554,1.625c0,.045.006.092.006.14v.139a4.252,4.252,0,0,1-.059.709,2.757,2.757,0,0,1-.192.654v-.005a2.194,2.194,0,0,1-.5.791,1.331,1.331,0,0,1-.718.365.8.8,0,0,1-.4.012,4.652,4.652,0,0,1-.594-.143q-.332-.1-.706-.24c-.25-.094-.495-.188-.737-.283s-.472-.184-.69-.267-.408-.149-.566-.2l.311,5.521-1.541.244Zm4.3-2.551a.822.822,0,0,0-.2.052,1.119,1.119,0,0,0-.265.146,1.8,1.8,0,0,0-.284.259,1.7,1.7,0,0,0-.253.377c-.052.1-.1.2-.143.3s-.084.2-.124.292l.472.2c.181.075.368.148.563.221s.385.141.571.2.351.111.493.143a.992.992,0,0,0,.082-.192,2.032,2.032,0,0,0,.067-.253c.018-.089.032-.178.042-.267a2.166,2.166,0,0,0,.015-.231,1.379,1.379,0,0,0-.091-.5,1.437,1.437,0,0,0-.238-.408,1.02,1.02,0,0,0-.332-.266.75.75,0,0,0-.331-.08Zm40.6,6.659a8.645,8.645,0,0,0,1.616-.472,6.554,6.554,0,0,0,1.251-.661,4.018,4.018,0,0,0,.861-.779,2.256,2.256,0,0,0,.441-.828h-.316c-.11,0-.22,0-.329-.006s-.215-.007-.316-.009-.191-.007-.268-.015a3.674,3.674,0,0,1-1.218-.286,2.263,2.263,0,0,1-.87-.645,1.828,1.828,0,0,1-.331-.651,2.771,2.771,0,0,1-.1-.755,3.559,3.559,0,0,1,.058-.627,4.026,4.026,0,0,1,.165-.617,4.335,4.335,0,0,1,.247-.569,3.5,3.5,0,0,1,.3-.487,2.338,2.338,0,0,1,.731-.636,1.747,1.747,0,0,1,.84-.216,2.317,2.317,0,0,1,1.723.84,3.99,3.99,0,0,1,.463.639,5.028,5.028,0,0,1,.359.755,5.81,5.81,0,0,1,.247.837,5.584,5.584,0,0,1,.119.892h.706q.475,0,.91-.043a2.763,2.763,0,0,0,.773-.179,1.315,1.315,0,0,0,.542-.39,1.108,1.108,0,0,0,.222-.667,2.127,2.127,0,0,0-.012-.322,3.348,3.348,0,0,0-.059-.338c-.026-.12-.059-.25-.1-.392l-.14-.493,1.491-.419q.08.292.128.533c.032.16.059.314.079.463s.038.3.052.453.029.325.045.512c.013.138.031.283.055.435a1.564,1.564,0,0,0,.125.417.834.834,0,0,0,.244.311.646.646,0,0,0,.41.122l.066,0,.044,0a1.685,1.685,0,0,0,.773-.167,2.136,2.136,0,0,0,.581-.436,3.162,3.162,0,0,0,.444-.6q.192-.335.363-.67t.331-.639a4.182,4.182,0,0,1,.374-.572,2.255,2.255,0,0,1,.673-.542,1.687,1.687,0,0,1,.794-.2,2.052,2.052,0,0,1,.919.207,2.3,2.3,0,0,1,.749.6,2.7,2.7,0,0,1,.418.709,3.174,3.174,0,0,1,.21.855v-.012a3.362,3.362,0,0,1,.037.511,3.535,3.535,0,0,1-.052.606,3.013,3.013,0,0,1-.155.563,2.1,2.1,0,0,1-.524.779,1.9,1.9,0,0,1-.743.438,1.761,1.761,0,0,1-.268.051,2.27,2.27,0,0,1-.274.015,2.456,2.456,0,0,1-.542-.064,4.072,4.072,0,0,1-.572-.173c-.085-.037-.18-.08-.286-.131s-.212-.106-.322-.167-.218-.124-.326-.192-.208-.133-.3-.2a4.426,4.426,0,0,1-.493.418,3.073,3.073,0,0,1-.538.313,2.784,2.784,0,0,1-.6.192,3.384,3.384,0,0,1-.672.064.515.515,0,0,1-.053,0,.471.471,0,0,1-.05,0,2.349,2.349,0,0,1-1.008-.194,2.175,2.175,0,0,1-.69-.506,2.436,2.436,0,0,1-.606.329,4.582,4.582,0,0,1-.758.216,7.362,7.362,0,0,1-.846.119q-.439.036-.865.037h-.827a4.8,4.8,0,0,1-.7,1.619,5.513,5.513,0,0,1-1.178,1.263,6.4,6.4,0,0,1-1.536.886,7.94,7.94,0,0,1-1.775.493Zm2.423-6.561a1.543,1.543,0,0,0-.335.344,2.1,2.1,0,0,0-.252.465,1.351,1.351,0,0,0-.1.5.714.714,0,0,0,.119.423.919.919,0,0,0,.3.271,1.551,1.551,0,0,0,.42.155,4.039,4.039,0,0,0,.465.076l.28.012c.1,0,.206.006.314.006h.32c.105,0,.2,0,.3-.012a3,3,0,0,0-.128-.645,3.888,3.888,0,0,0-.229-.566,3.226,3.226,0,0,0-.286-.473q-.155-.209-.289-.362v.006a1.99,1.99,0,0,0-.252-.222.51.51,0,0,0-.308-.113A.587.587,0,0,0,110.52,185.02Zm12.737.225q-.167.267-.435.8l-.256.529a3.114,3.114,0,0,0,.454.271,5,5,0,0,0,.5.216,4.174,4.174,0,0,0,.456.143,1.464,1.464,0,0,0,.338.052.607.607,0,0,0,.152-.019.258.258,0,0,0,.125-.076.574.574,0,0,0,.112-.174,1.3,1.3,0,0,0,.079-.256,1.238,1.238,0,0,0,.018-.329,1.153,1.153,0,0,0-.046-.213,2.363,2.363,0,0,0-.11-.292,2.468,2.468,0,0,0-.173-.323,1.693,1.693,0,0,0-.235-.3,1.214,1.214,0,0,0-.292-.216.74.74,0,0,0-.35-.085C123.482,184.977,123.368,185.066,123.257,185.245Zm-21.484,5.63,1.163-1.163,1.169,1.169-1.163,1.162Zm-20.78-2.03a1.719,1.719,0,0,1-.442-.207,1.941,1.941,0,0,1-.359-.307,3.428,3.428,0,0,1-.3-.372,2.736,2.736,0,0,1-.267.332,1.539,1.539,0,0,1-.372.283,2.1,2.1,0,0,1-.526.2,3.055,3.055,0,0,1-.733.076h-.1a.727.727,0,0,1-.077-.007,3.437,3.437,0,0,1-.592-.057,2.78,2.78,0,0,1-.545-.158,2.057,2.057,0,0,1-.427-.238,2.338,2.338,0,0,1-.331-.3,2.968,2.968,0,0,1-.451.247q-.274.124-.535.229a3.687,3.687,0,0,1-.785.207,6.09,6.09,0,0,1-.92.067A3.142,3.142,0,0,1,71.8,188.5a4.631,4.631,0,0,1-1.264-.949l.895-1.26a4.5,4.5,0,0,0,1.035.737,2.126,2.126,0,0,0,.919.231c.069,0,.147,0,.231-.01s.173-.016.262-.03.175-.031.259-.052a1.941,1.941,0,0,0,.222-.067l.228-.092c.079-.032.155-.066.225-.1s.135-.068.192-.1a1.239,1.239,0,0,0,.14-.091L73.2,182.031l1.442-.6q.213.531.506,1.229l.606,1.467q.356.865.824,1.978l.1.238c.053.139.108.265.165.381a1.039,1.039,0,0,0,.216.3.9.9,0,0,0,.335.2,1.577,1.577,0,0,0,.511.07,1.382,1.382,0,0,0,.639-.147,1.617,1.617,0,0,0,.493-.39,2.569,2.569,0,0,0,.363-.553,5.75,5.75,0,0,0,.265-.639q.112-.329.194-.649t.149-.575l1.522.335q-.055.171-.143.436t-.174.56q-.085.3-.14.6a2.146,2.146,0,0,0-.036.542.725.725,0,0,0,.131.39.433.433,0,0,0,.368.148.832.832,0,0,0,.493-.155,1.607,1.607,0,0,0,.393-.408,3.037,3.037,0,0,0,.3-.575,6.2,6.2,0,0,0,.225-.661c.063-.225.115-.445.158-.661s.076-.408.1-.578l1.425.274c-.013.126-.032.257-.058.4s-.054.281-.083.428-.052.3-.073.463a4.045,4.045,0,0,0-.031.5,1.743,1.743,0,0,0,.04.377.893.893,0,0,0,.134.313.688.688,0,0,0,.25.22.854.854,0,0,0,.38.088,1.094,1.094,0,0,0,.707-.22.8.8,0,0,0,.274-.67,3.208,3.208,0,0,0-.088-.712,7.487,7.487,0,0,0-.213-.752q-.124-.369-.265-.688c-.094-.212-.175-.391-.243-.532l1.309-.731c.024.045.064.127.119.247s.116.265.185.436.141.363.216.578.143.44.2.676.112.478.152.727a4.571,4.571,0,0,1,.06.733,2.85,2.85,0,0,1-.174,1.022,2.074,2.074,0,0,1-.511.779,2.272,2.272,0,0,1-.831.5,3.283,3.283,0,0,1-1.132.167,1.641,1.641,0,0,1-1-.289,1.968,1.968,0,0,1-.354-.313,3.421,3.421,0,0,1-.276-.359,2.817,2.817,0,0,1-.305.377,1.76,1.76,0,0,1-.38.3,2.051,2.051,0,0,1-.487.2,2.473,2.473,0,0,1-.625.082h-.048A1.608,1.608,0,0,1,80.993,188.845Zm17.335,0h-.054a4.673,4.673,0,0,1-.576-.042,2.287,2.287,0,0,1-.679-.2,1.91,1.91,0,0,1-.809-.706q-.342.049-.652.073t-.6.024a4.044,4.044,0,0,1-1.4-.216,2.193,2.193,0,0,1-.925-.612,1.6,1.6,0,0,1-.28-.538,1.92,1.92,0,0,1-.086-.551,2.072,2.072,0,0,1,.04-.42,1.806,1.806,0,0,1,.094-.322,3.333,3.333,0,0,1,.611-.892,5.284,5.284,0,0,1,.764-.658,5.44,5.44,0,0,1,.779-.459q.383-.184.663-.292c-.02-.154-.035-.309-.046-.463s-.021-.309-.033-.463l1.54-.328q.007.054.024.24c.013.123.028.271.046.441s.038.352.058.545.039.373.055.542.032.314.046.437.023.2.027.229q.092.779.167,1.273c.051.329.1.588.134.779s.07.327.094.408a1.121,1.121,0,0,0,.055.158.929.929,0,0,0,.137.222.561.561,0,0,0,.183.14.873.873,0,0,0,.249.073,2.2,2.2,0,0,0,.326.022h1.2a8.522,8.522,0,0,0,1.537-.143,13.969,13.969,0,0,0,1.555-.378q.774-.234,1.509-.538t1.394-.627a5.554,5.554,0,0,1-.974-.307q-.451-.192-.852-.374t-.773-.317a2.165,2.165,0,0,0-.736-.134,1.028,1.028,0,0,0-.4.076,1.581,1.581,0,0,0-.344.192,1.793,1.793,0,0,0-.284.256c-.083.094-.156.184-.219.271s-.115.165-.156.234l-.085.146-1.266-.822a4.8,4.8,0,0,1,.493-.708,4.033,4.033,0,0,1,.636-.616,3.1,3.1,0,0,1,.758-.432,2.336,2.336,0,0,1,.864-.161,3.545,3.545,0,0,1,.932.125,7.337,7.337,0,0,1,.916.313q.454.189.91.41t.922.414a8.24,8.24,0,0,0,.941.323,3.808,3.808,0,0,0,.974.137l-.128,1.57q-.852.408-1.777.864t-1.936.846a16.391,16.391,0,0,1-2.112.652,10.872,10.872,0,0,1-2.3.286Zm-3.268-4.285q-.2.1-.4.234t-.4.277a2.948,2.948,0,0,0-.35.3,1.648,1.648,0,0,0-.246.313.594.594,0,0,0-.094.3.26.26,0,0,0,.134.222,1.1,1.1,0,0,0,.338.139,2.777,2.777,0,0,0,.445.074c.16.013.309.021.447.021s.259,0,.39-.015.248-.023.353-.04c-.021-.109-.041-.239-.061-.389s-.04-.314-.06-.49-.042-.36-.064-.551-.046-.382-.07-.572C95.307,184.432,95.189,184.488,95.06,184.558Zm21.815-2.52L117.91,181l1.047,1.04-1.035,1.041Zm-2.3-.006,1.034-1.041,1.048,1.048-1.035,1.034Zm-30.867-.42,1.035-1.035,1.047,1.041-1.035,1.04Zm-2.3-.006,1.035-1.04,1.047,1.047-1.034,1.035Zm1.242-1.752.95-.949.956.955-.95.95ZM94.892,62.379a9.547,9.547,0,0,0,1.444-.4,6.644,6.644,0,0,0,1.136-.537,3.9,3.9,0,0,0,.806-.63,2.126,2.126,0,0,0,.452-.679q-.243,0-.491-.008c-.166-.005-.307-.013-.424-.02a3.841,3.841,0,0,1-1.2-.291,2.206,2.206,0,0,1-.865-.636,1.889,1.889,0,0,1-.337-.661,2.806,2.806,0,0,1-.1-.751,3.377,3.377,0,0,1,.057-.613,3.912,3.912,0,0,1,.158-.6,3.983,3.983,0,0,1,.536-1.026,2.458,2.458,0,0,1,.743-.642,1.774,1.774,0,0,1,.851-.218,2.3,2.3,0,0,1,1.724.837,3.764,3.764,0,0,1,.429.588,5.023,5.023,0,0,1,.339.687,5.235,5.235,0,0,1,.24.76,5.458,5.458,0,0,1,.127.808h.141a1.568,1.568,0,0,0,.56-.1,1.206,1.206,0,0,0,.491-.382,3.008,3.008,0,0,0,.436-.8,9.274,9.274,0,0,0,.39-1.346l1.5.214c0,.016-.011.04-.019.074-.024.094-.053.227-.085.4s-.063.364-.091.576a4.4,4.4,0,0,0-.04.611,1.791,1.791,0,0,0,.068.5.327.327,0,0,0,.229.251.4.4,0,0,0,.339-.07,1.29,1.29,0,0,0,.311-.334,3.044,3.044,0,0,0,.271-.508c.084-.194.158-.393.227-.6s.126-.4.175-.6.087-.37.113-.52l1.492.214c-.007.094-.021.22-.04.376s-.034.323-.045.5-.016.355-.014.534a2.007,2.007,0,0,0,.059.486.871.871,0,0,0,.175.356.407.407,0,0,0,.328.139.462.462,0,0,0,.322-.124,1.022,1.022,0,0,0,.229-.325,2.224,2.224,0,0,0,.15-.458,4.76,4.76,0,0,0,.085-.523,4.87,4.87,0,0,0,.028-.517c0-.167-.005-.315-.017-.444l1.526-.214.186,1.594a1.187,1.187,0,0,0,.413.771,1.159,1.159,0,0,0,.322.193.9.9,0,0,0,.322.065h.865c.169,0,.355-.008.559-.022a5.664,5.664,0,0,0,.588-.074,2.857,2.857,0,0,0,.512-.139.762.762,0,0,0,.336-.223.465.465,0,0,0,.063-.26,1.8,1.8,0,0,0-.116-.576c-.077-.222-.169-.449-.274-.679s-.213-.45-.325-.662-.2-.386-.268-.526l1.611-.791a5.568,5.568,0,0,1,.338.721c.11.276.208.562.294.853a8.5,8.5,0,0,1,.209.86,4.008,4.008,0,0,1,.079.732,2.624,2.624,0,0,1-.2,1.046,2.415,2.415,0,0,1-.65.878,2.632,2.632,0,0,1-.989.512,3.045,3.045,0,0,1-.424.073q-.254.028-.515.042c-.173.01-.337.015-.491.017l-.362,0h-.918a2.775,2.775,0,0,1-.953-.191,1.987,1.987,0,0,1-.841-.65.886.886,0,0,1-.068.079q-.034.034-.062.068v-.005a2.347,2.347,0,0,1-.7.511,1.971,1.971,0,0,1-.856.189,2.046,2.046,0,0,1-.947-.221,2.088,2.088,0,0,1-.721-.6,2.9,2.9,0,0,1-.769.6,1.963,1.963,0,0,1-.944.231,1.906,1.906,0,0,1-.893-.214,1.945,1.945,0,0,1-.684-.589,1.7,1.7,0,0,1-.754.6,2.985,2.985,0,0,1-1.111.181h-.294a4.544,4.544,0,0,1-.7,1.5,5.408,5.408,0,0,1-1.153,1.175,6.4,6.4,0,0,1-1.492.831,7.98,7.98,0,0,1-1.721.47Zm2.5-5.808a1.373,1.373,0,0,0-.28.28,1.692,1.692,0,0,0-.218.378,1.05,1.05,0,0,0-.087.408.468.468,0,0,0,.107.316.787.787,0,0,0,.274.2,1.514,1.514,0,0,0,.365.113c.131.024.26.042.384.053.067.008.142.013.223.014l.251,0,.257,0c.085,0,.163.005.235.009a2.873,2.873,0,0,0-.124-.52,3.785,3.785,0,0,0-.19-.452A2.634,2.634,0,0,0,98.36,57a3.342,3.342,0,0,0-.235-.291.932.932,0,0,0-.1-.085c-.04-.03-.08-.057-.121-.082a.736.736,0,0,0-.127-.059.376.376,0,0,0-.116-.022A.475.475,0,0,0,97.388,56.571Zm-12.8,7.051a4.481,4.481,0,0,1-1-.339,3.9,3.9,0,0,1-.864-.59,3.174,3.174,0,0,1-.639-.794V61.9a3.64,3.64,0,0,1-.419-.969,4.274,4.274,0,0,1-.141-1.122A7.547,7.547,0,0,1,81.562,59a6.082,6.082,0,0,1,.136-.769,6.186,6.186,0,0,1,.246-.774,9.05,9.05,0,0,1,.374-.828l1.424.6a7.037,7.037,0,0,0-.359.76,5.246,5.246,0,0,0-.214.667,4.282,4.282,0,0,0-.1.6q-.028.285-.029.551a1.813,1.813,0,0,0,.226.9,2.16,2.16,0,0,0,.6.679,2.748,2.748,0,0,0,.868.42,3.487,3.487,0,0,0,1.023.139,3.037,3.037,0,0,0,.919-.135,2.915,2.915,0,0,0,.774-.376,2.762,2.762,0,0,0,.607-.573,2.881,2.881,0,0,0,.413-.73l-1.075-.005a3.8,3.8,0,0,1-1.2-.291,2.172,2.172,0,0,1-.859-.647l.005.005a2.32,2.32,0,0,1-.373-.634,2.022,2.022,0,0,1-.136-.751,2.891,2.891,0,0,1,.067-.616,4.044,4.044,0,0,1,.185-.607,4.479,4.479,0,0,1,.263-.562,3.8,3.8,0,0,1,.305-.475,2.352,2.352,0,0,1,.734-.644,1.773,1.773,0,0,1,.853-.22,2.306,2.306,0,0,1,1.724.842,4.217,4.217,0,0,1,.757,1.266,5.742,5.742,0,0,1,.368,1.554h.752c.169,0,.356-.008.56-.022a5.7,5.7,0,0,0,.588-.074,2.847,2.847,0,0,0,.511-.139.765.765,0,0,0,.337-.223.473.473,0,0,0,.062-.26,1.8,1.8,0,0,0-.116-.576c-.077-.222-.168-.449-.274-.679s-.214-.45-.326-.662-.2-.386-.268-.526l1.611-.791a5.564,5.564,0,0,1,.339.721c.109.276.207.562.293.853a8.511,8.511,0,0,1,.21.86,4.089,4.089,0,0,1,.079.732,2.64,2.64,0,0,1-.2,1.046,2.417,2.417,0,0,1-.651.878A2.626,2.626,0,0,1,92.6,60a3,3,0,0,1-.424.073c-.169.019-.341.033-.514.042s-.337.015-.492.017l-.361,0h-.82a5.9,5.9,0,0,1-.178.659,4.9,4.9,0,0,1-.3.715,4.281,4.281,0,0,1-.59.86,4.178,4.178,0,0,1-.743.672,3.951,3.951,0,0,1-1.116.523,4.645,4.645,0,0,1-1.326.184A5.3,5.3,0,0,1,84.586,63.622Zm1.9-5.587a1.353,1.353,0,0,0,.351.17,2.558,2.558,0,0,0,.39.1c.128.021.22.033.277.037a2.2,2.2,0,0,0,.226.014l.248,0c.132,0,.246,0,.339,0s.185,0,.272-.008a2.024,2.024,0,0,0-.062-.351,2.833,2.833,0,0,0-.136-.39,3.134,3.134,0,0,0-.2-.39,1.92,1.92,0,0,0-.263-.346,1.461,1.461,0,0,0-.322-.254.932.932,0,0,0-.374-.124.483.483,0,0,0-.33.1,1.249,1.249,0,0,0-.3.305,1.609,1.609,0,0,0-.215.427,1.2,1.2,0,0,0-.062.463v-.005A.338.338,0,0,0,86.487,58.035Zm5.862,3.976-1.063,1.063-1.1-1.091,1.085-1.091,1.074,1.074L93.412,60.9l1.1,1.092-1.085,1.091Zm-33.025,0-1.063,1.063-1.1-1.091,1.085-1.091,1.074,1.074L60.386,60.9l1.1,1.092L60.4,63.086Zm72.7-1.857a1.636,1.636,0,0,1-.41-.155,1.559,1.559,0,0,1-.337-.247,2.523,2.523,0,0,1-.28-.319,1.992,1.992,0,0,1-.271.274,1.655,1.655,0,0,1-.362.223,2.247,2.247,0,0,1-.487.153,3.233,3.233,0,0,1-.643.057h-.1c-.022,0-.042,0-.063-.006a1.477,1.477,0,0,1-1.135-.486,1.6,1.6,0,0,1-1.181.463,5.85,5.85,0,0,1-2.414-.836,1.263,1.263,0,0,1-.39.435,1.959,1.959,0,0,1-.582.3,2.947,2.947,0,0,1-.927.136,1.024,1.024,0,0,1-.177-.015,3.433,3.433,0,0,1-.982-.168,2.277,2.277,0,0,1-.859-.528,1.806,1.806,0,0,1-.348-.475,2.219,2.219,0,0,1-.175-.489,2.516,2.516,0,0,1-.062-.455c-.006-.143-.009-.265-.009-.367v-.085c0-.139.009-.34.014-.6s.008-.57.008-.924,0-.744-.005-1.17-.014-.851-.031-1.274-.041-.832-.074-1.224a9.476,9.476,0,0,0-.133-1.022l1.69-.515a8.28,8.28,0,0,1,.119.879q.046.5.076,1.059t.045,1.113q.015.56.02,1.04a8.068,8.068,0,0,1-.031.828c-.025.269-.045.534-.059.791a5.819,5.819,0,0,0,0,.752,2.509,2.509,0,0,0,.155.709.513.513,0,0,0,.128.2.466.466,0,0,0,.178.1.9.9,0,0,0,.223.037c.081,0,.17.006.268.006h.05a.9.9,0,0,1,.14.012,1.582,1.582,0,0,0,1.058-.69,4.882,4.882,0,0,0,.4-.662c.042-.083.1-.2.17-.339l.079-.169.079-.158q.763-1.515,1.9-1.515a2.178,2.178,0,0,1,1.47.554,2.469,2.469,0,0,1,.82,1.724l.005.05a.267.267,0,0,1,.011.079,2.954,2.954,0,0,0,.079.56,1.459,1.459,0,0,0,.148.384.316.316,0,0,0,.26.175h.039a1.119,1.119,0,0,0,.715-.229,1.982,1.982,0,0,0,.5-.6,4.323,4.323,0,0,0,.355-.851q.147-.477.277-.975l1.5.272c-.031.131-.067.285-.111.46s-.083.357-.119.545-.065.373-.087.552a2.193,2.193,0,0,0-.014.472.65.65,0,0,0,.1.319.247.247,0,0,0,.26.087.752.752,0,0,0,.41-.157,1.514,1.514,0,0,0,.33-.362,2.843,2.843,0,0,0,.26-.5,5.256,5.256,0,0,0,.2-.571c.054-.2.1-.391.135-.582s.066-.367.088-.526l1.436.243c0,.112-.017.252-.04.418s-.043.34-.062.523a5.34,5.34,0,0,0-.029.549,1.789,1.789,0,0,0,.062.491.763.763,0,0,0,.207.353.563.563,0,0,0,.4.136,1.054,1.054,0,0,0,.322-.053,1,1,0,0,0,.293-.153.824.824,0,0,0,.212-.235.582.582,0,0,0,.082-.305,2.49,2.49,0,0,0-.1-.647,7.013,7.013,0,0,0-.231-.7q-.136-.347-.286-.658c-.1-.208-.184-.382-.251-.526l1.4-.786q.035.073.119.257t.193.444q.107.261.223.585t.211.676a7.109,7.109,0,0,1,.158.718,4.261,4.261,0,0,1,.062.712,3.118,3.118,0,0,1-.155,1.017,1.985,1.985,0,0,1-.47.769,2.123,2.123,0,0,1-.786.492,3.24,3.24,0,0,1-1.1.181,2.391,2.391,0,0,1-.554-.059,1.92,1.92,0,0,1-.446-.164,1.726,1.726,0,0,1-.353-.247,2.078,2.078,0,0,1-.275-.3,2.307,2.307,0,0,1-.291.313,1.578,1.578,0,0,1-.356.238,2.058,2.058,0,0,1-.449.156,2.776,2.776,0,0,1-.565.062h-.05A1.878,1.878,0,0,1,132.025,60.154Zm-5.909-3.62q-.243.1-.735,1.255,1.419.814,1.752.729.181-.045.215-.469a1.363,1.363,0,0,0-.164-.791,1.593,1.593,0,0,0-.532-.56.873.873,0,0,0-.441-.181A.25.25,0,0,0,126.115,56.534Zm-54.445,3.62a1.649,1.649,0,0,1-.41-.155,1.559,1.559,0,0,1-.337-.247,2.523,2.523,0,0,1-.28-.319,1.992,1.992,0,0,1-.271.274,1.613,1.613,0,0,1-.362.223,2.254,2.254,0,0,1-.486.153,3.249,3.249,0,0,1-.644.057h-.1c-.022,0-.045,0-.067-.006a3.491,3.491,0,0,1-.53-.045,2.3,2.3,0,0,1-.469-.127,1.7,1.7,0,0,1-.367-.2,2.355,2.355,0,0,1-.3-.257c-.1.068-.21.133-.322.2a3.831,3.831,0,0,1-.391.184,3.513,3.513,0,0,1-.732.189,5.865,5.865,0,0,1-.873.059,3.871,3.871,0,0,1-1.45-.283,3.751,3.751,0,0,1-1.314-.91L62.986,57.5a3.655,3.655,0,0,0,.537.415,2.91,2.91,0,0,0,.5.252,2.272,2.272,0,0,0,.449.124,2.548,2.548,0,0,0,.4.034c.057,0,.121,0,.192-.006s.143-.01.215-.02.141-.022.209-.036a1.2,1.2,0,0,0,.186-.057,2.266,2.266,0,0,0,.464-.249q-.215-.52-.466-1.082t-.506-1.13l-.5-1.128q-.248-.56-.464-1.074l1.651-.69.5,1.221q.243.6.582,1.421t.78,1.863q.1.248.186.435a1.139,1.139,0,0,0,.2.311.706.706,0,0,0,.277.184,1.182,1.182,0,0,0,.409.059,1.118,1.118,0,0,0,.71-.229,1.982,1.982,0,0,0,.5-.6,4.323,4.323,0,0,0,.355-.851q.147-.477.277-.975l1.5.272c-.031.131-.067.285-.111.46s-.083.357-.119.545-.065.373-.087.552a2.193,2.193,0,0,0-.014.472.641.641,0,0,0,.105.319.245.245,0,0,0,.259.087.752.752,0,0,0,.41-.157,1.514,1.514,0,0,0,.33-.362,2.843,2.843,0,0,0,.26-.5,5.257,5.257,0,0,0,.2-.571c.054-.2.1-.391.135-.582s.066-.367.088-.526l1.436.243c0,.112-.017.252-.04.418s-.043.34-.062.523a5.342,5.342,0,0,0-.029.549,1.788,1.788,0,0,0,.063.491.754.754,0,0,0,.206.353.564.564,0,0,0,.4.136,1.054,1.054,0,0,0,.322-.053,1,1,0,0,0,.293-.153.824.824,0,0,0,.212-.235.574.574,0,0,0,.082-.305,2.49,2.49,0,0,0-.1-.647,7.014,7.014,0,0,0-.231-.7q-.136-.347-.285-.658c-.1-.208-.184-.382-.252-.526l1.4-.786c.022.049.062.134.118.257s.121.271.193.444.146.369.223.585.148.442.212.676.116.472.158.718a4.263,4.263,0,0,1,.062.712,3.118,3.118,0,0,1-.155,1.017,1.994,1.994,0,0,1-.469.769,2.138,2.138,0,0,1-.786.492,3.249,3.249,0,0,1-1.105.181,2.4,2.4,0,0,1-.554-.059,1.921,1.921,0,0,1-.446-.164,1.727,1.727,0,0,1-.353-.247,2.13,2.13,0,0,1-.274-.3,2.308,2.308,0,0,1-.291.313,1.558,1.558,0,0,1-.356.238,2.058,2.058,0,0,1-.449.156,2.769,2.769,0,0,1-.565.062h-.05A1.883,1.883,0,0,1,71.671,60.154Zm-14.71-.02H56.91a.913.913,0,0,1-.25-.033l-.075-.012a2.3,2.3,0,0,1-.469-.127,1.7,1.7,0,0,1-.367-.2,2.355,2.355,0,0,1-.3-.257c-.1.068-.21.133-.322.2a3.831,3.831,0,0,1-.391.184,3.513,3.513,0,0,1-.732.189,5.865,5.865,0,0,1-.873.059,3.871,3.871,0,0,1-1.45-.283,3.751,3.751,0,0,1-1.314-.91L51.387,57.5a3.655,3.655,0,0,0,.537.415,2.91,2.91,0,0,0,.5.252,2.272,2.272,0,0,0,.449.124,2.548,2.548,0,0,0,.4.034c.057,0,.121,0,.192-.006s.143-.01.215-.02.141-.022.209-.036a1.241,1.241,0,0,0,.187-.057,2.315,2.315,0,0,0,.463-.249c-.144-.347-.3-.707-.467-1.082s-.336-.751-.506-1.13l-.5-1.128q-.248-.56-.464-1.074l1.651-.69.5,1.221q.243.6.582,1.421t.78,1.863q.1.248.186.435a1.14,1.14,0,0,0,.2.311.706.706,0,0,0,.277.184,1.217,1.217,0,0,0,.415.059h.616c.169,0,.356-.008.559-.022a5.682,5.682,0,0,0,.589-.074,2.867,2.867,0,0,0,.511-.139.765.765,0,0,0,.337-.223.473.473,0,0,0,.062-.26,1.8,1.8,0,0,0-.116-.576c-.077-.222-.168-.449-.275-.679s-.213-.45-.325-.662-.2-.386-.268-.526l1.611-.791a5.564,5.564,0,0,1,.339.721c.109.276.207.562.293.853a8.512,8.512,0,0,1,.21.86,4.09,4.09,0,0,1,.079.732,2.624,2.624,0,0,1-.2,1.046,2.4,2.4,0,0,1-.65.878,2.626,2.626,0,0,1-.989.512,3,3,0,0,1-.424.073c-.169.019-.341.033-.514.042s-.338.015-.492.017l-.362,0Zm47.082-4.194c.007-.029.008-.029,0,0Zm2.262-2.5L105.242,54.5l-1.1-1.091,1.085-1.091L106.3,53.4l1.062-1.062,1.1,1.091-1.085,1.091Zm28.13-.17-1.062,1.063-1.1-1.091,1.085-1.091,1.074,1.074,1.063-1.063,1.1,1.091-1.085,1.091Zm-60.354,0-1.062,1.063-1.1-1.091,1.085-1.091,1.074,1.074,1.063-1.063,1.1,1.091-1.084,1.091Zm12.932-.435L85.951,53.9l-1.1-1.091,1.085-1.091,1.074,1.074,1.063-1.062,1.1,1.091-1.085,1.091Zm26.622-.062-1.062,1.062-1.1-1.091,1.085-1.091,1.074,1.074,1.063-1.062,1.1,1.091-1.085,1.091Zm-8.337-.989,1.006-1.006,1.012,1.012L106.31,52.8Zm28.13-.17,1.006-1.006,1.012,1.012-1.005,1.006Zm-60.353,0,1.005-1.006,1.012,1.012-1.006,1.006Zm87.732-5.944,1.8-.877,1.315,2.7-1.8.877Zm-136,1.82,1.316-2.7,1.8.877-1.315,2.7Zm57.724-7.763a1.49,1.49,0,0,1,0-2.98H84.5v-.5a3.97,3.97,0,0,1,3.945-3.973h4.437V27.732a13.783,13.783,0,0,1-11.3-8.582,9.651,9.651,0,0,1-3.353-2.225A10.886,10.886,0,0,1,75.2,9.574a5.035,5.035,0,0,1,5.068-5.1h1.1A7.874,7.874,0,0,1,88.448,0H100.28a7.874,7.874,0,0,1,7.079,4.469h1.1a5.036,5.036,0,0,1,5.069,5.1,10.887,10.887,0,0,1-3.037,7.35,9.651,9.651,0,0,1-3.353,2.225,13.783,13.783,0,0,1-11.3,8.582v4.548h4.437a3.969,3.969,0,0,1,3.944,3.973v.5H106.2a1.49,1.49,0,0,1,0,2.98ZM94.364,27.81a13.785,13.785,0,0,1-1.424-.073A12.573,12.573,0,0,0,94.364,27.81Zm0,0a12.6,12.6,0,0,0,1.425-.073A13.789,13.789,0,0,1,94.364,27.81Zm.512-9.932,1.795.715a1.27,1.27,0,0,0,1.873-1.372l-.117-1.946a1.491,1.491,0,0,1,.315-.954l1.223-1.509a1.282,1.282,0,0,0-.71-2.225l-1.874-.477a1.562,1.562,0,0,1-.808-.616L95.527,7.866a1.271,1.271,0,0,0-2.327,0L92.155,9.495a1.562,1.562,0,0,1-.808.616l-1.873.477a1.281,1.281,0,0,0-.71,2.225l1.222,1.509a1.5,1.5,0,0,1,.316.954l-.118,1.946a1.27,1.27,0,0,0,1.873,1.372l1.795-.715a1.817,1.817,0,0,1,1.025,0ZM29.13,27.007l3.654-1.626.814,1.827-3.654,1.627Zm126,.2.813-1.827,3.655,1.626-.814,1.827ZM52.755,23.318l3,2.024L52.251,26.9Zm80.214,2.024,3-2.025.5,3.586ZM187,14.505l.814-1.827.914.407-.814,1.827ZM0,13.085l.914-.407.814,1.827-.914.407Zm145.364.71v-5h2v5Zm-104,0v-5h2v5Zm126-10,1.5-3,1.5,3Zm-149,0,1.5-3,1.5,3Z" transform="translate(-5804.364 14466.204)" fill="#2ab4ff" stroke="rgba(0,0,0,0)" strokeMiterlimit="10" strokeWidth="1"/>
    <path id="Union_38" data-name="Union 38" d="M130,26.174l1.5-3,1.5,3Zm-89,0,1.5-3,1.5,3Zm129-2,2-3,2,3Zm-170,0,2-3,2,3ZM9.5,3.559l3.122,1.226L10.389,6.793ZM161.382,4.785,164.5,3.559l-.893,3.233ZM115.326,1.754,118.921,0l1.754,3.6-3.6,1.753Zm-62,1.841L55.079,0l3.6,1.753-1.754,3.6Z" transform="translate(-5797 14477.826)" fill="#bdddef"/>
  </g>
      </svg>
    </Box>
  );

  if (disabledLink) {
    return <>{logo}</>;
  }

  return <RouterLink to="/">{logo}</RouterLink>;
}
