//! Test suite for the Web and headless browsers.

#![cfg(target_arch = "wasm32")]

extern crate wasm_bindgen_test;

use acrate::sum;
use wasm_bindgen_test::*;

wasm_bindgen_test_configure!(run_in_browser);

mod test_sum {
    use super::*;

    #[wasm_bindgen_test]
    fn sum_works() {
        assert_eq!(sum(9.0, 10.0), 19.0);
    }
}

// Add more test modules for other functions like so:
//
// mod another_function_tests {
//     use super::*;
//     // Tests for another function
// }
