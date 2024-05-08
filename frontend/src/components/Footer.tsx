import { Box, Container, Link, Typography } from "@mui/material";
import Logo from "/images/logo.svg";
import GitHubIcon from "@mui/icons-material/GitHub";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.dark",
        py: 4,
        mt: 6,
      }}
    >
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignItems: "space-between",
          gap: 4,
        }}
      >
        {/* Logo */}
        <Box
          sx={{
            width: "100%",
            height: 70,

            display: "flex",
            justifyContent: "center",
            backgroundImage: `url(${Logo})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
          }}
          component="div"
        ></Box>

        {/* Links */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
          }}
        >
          <Link href="#" color="primary.contrastText" underline="hover">
            About Tripedia
          </Link>
          <Link href="#" color="primary.contrastText" underline="hover">
            Policies
          </Link>
          <Link href="#" color="primary.contrastText" underline="hover">
            Help
          </Link>
          <Link href="#" color="primary.contrastText" underline="hover">
            Contact Us
          </Link>
        </Box>

        {/* social medias */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 4,
          }}
        >
          <Link href="#">
            <GitHubIcon
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            />
          </Link>

          <Link href="#">
            <FacebookIcon
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            />
          </Link>

          <Link href="#">
            <InstagramIcon
              sx={{
                color: (theme) => theme.palette.primary.contrastText,
              }}
            />
          </Link>
        </Box>

        {/* copyrights */}
        <Box>
          <Typography
            variant="body2"
            sx={{
              color: (theme) => theme.palette.primary.contrastText,
              display: "flex",
              justifyContent: "center",
            }}
          >
            &copy; 2024 Tripedia. All Rights Reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
