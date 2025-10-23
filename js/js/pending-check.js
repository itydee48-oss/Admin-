<script type="module">
  import { db } from "./js/firebase-config.js";
  import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

  const userEmail = localStorage.getItem("userEmail");

  async function checkApproval() {
    const q = query(collection(db, "referrals"), where("email", "==", userEmail));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      const data = doc.data();
      if (data.status === "approved") {
        window.location.href = "success-referral.html";
      }
    });
  }

  // Check every 5 seconds
  setInterval(checkApproval, 5000);
</script>
