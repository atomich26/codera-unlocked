/**
 * @author Michele Bevilacqua 
 * @since 1.0
 */

//Script string to inject in DOM. Well-formatted code is commented at the bottom of the script
const script_string = "const body = document.getElementsByTagName('body')[0];const wallpay_n_obs = new MutationObserver(obs_cb);const obs_config = { attributes: true, childList: true, subtree: true };var wallpay_n;wallpay_n_obs.observe(body, obs_config); function obs_cb(mutationList, observer) {for (const mutation of mutationList) {if (mutation.type = \"childList\" && document.querySelector('.tp-modal.wall-modal.fullWide') != null){setTimeout(() => {document.querySelector('.tp-modal.wall-modal.fullWide').remove();document.querySelector(\"div.tp-backdrop.tp-active\").remove();body.classList.remove(\"tp-modal-open\");wallpay_n_obs.disconnect()}, 700)}}}"

const inj_script = document.createElement("script");
inj_script.innerHTML = script_string;

document.body.appendChild(inj_script);


/*
const body = document.getElementsByTagName('body')[0];

const wallpay_n_obs = new MutationObserver(obs_cb);
const obs_config = { attributes: true, childList: true, subtree: true };

var wallpay_n;
wallpay_n_obs.observe(body, obs_config); 

function obs_cb(mutationList, observer) {
    for (const mutation of mutationList) {
        if (mutation.type = "childList" && document.querySelector('.tp-modal.wall-modal.fullWide') != null){
            setTimeout(() => {
                document.querySelector('.tp-modal.wall-modal.fullWide').remove();
                document.querySelector("div.tp-backdrop.tp-active").remove();
                body.classList.remove("tp-modal-open");
                wallpay_n_obs.disconnect()
            }, 700)
        }
    }
}
*/



























